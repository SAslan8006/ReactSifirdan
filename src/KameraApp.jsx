import { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr'; // Alternatif kütüphane ekleniyor

function App() {
    const video = useRef(null);
    const canvas = useRef(null);
    const [barcode, setBarcode] = useState(null);
    const [basket, setBasket] = useState([]);
    const [intervalId, setIntervalId] = useState(null);

    const openCam = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 300,
                height: 300,
                facingMode: 'environment' // mobilde arka kamerayı açtırmak için
            }
        })
            .then(stream => {
                video.current.srcObject = stream;
                video.current.play();

                const ctx = canvas.current.getContext('2d');

                if ('BarcodeDetector' in window) {
                    const barcodeDetector = new window.BarcodeDetector({ formats: ['qr_code', 'ean_13'] });

                    const id = setInterval(() => {
                        canvas.current.width = video.current.videoWidth;
                        canvas.current.height = video.current.videoHeight;
                        ctx.drawImage(video.current, 0, 0, video.current.videoWidth, video.current.videoHeight);

                        barcodeDetector.detect(canvas.current)
                            .then((detectedCodes) => {
                                if (detectedCodes && detectedCodes.length > 0) {
                                    setBarcode(detectedCodes[0].rawValue);
                                }
                            })
                            .catch(err => console.log(err));
                    }, 100);

                    setIntervalId(id);
                } else {
                    // BarcodeDetector yoksa jsQR ile algılama yapılıyor
                    const id = setInterval(() => {
                        canvas.current.width = video.current.videoWidth;
                        canvas.current.height = video.current.videoHeight;
                        ctx.drawImage(video.current, 0, 0, video.current.videoWidth, video.current.videoHeight);

                        const imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
                        const code = jsQR(imageData.data, canvas.current.width, canvas.current.height);

                        if (code) {
                            setBarcode(code.data);
                        }
                    }, 100);

                    setIntervalId(id);
                }
            })
            .catch(err => alert("Kamera erişimi sağlanamadı: " + err));
    };

    useEffect(() => {
        if (barcode) {
            const API_URL = `http://localhost/api.php?barcode=${barcode}`;

            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setBasket(prevBasket => [...prevBasket, data]);
                    } else {
                        alert('Bu ürün bulunamadı!');
                    }
                })
                .catch(err => console.log(err));
        }
    }, [barcode]);

    useEffect(() => {
        return () => {
            // Kamera akışını durdurma
            if (video.current && video.current.srcObject) {
                const tracks = video.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }

            // setInterval temizleme
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <>
            <button onClick={openCam}>Kamerayı Aç</button>
            <div>
                <video ref={video} autoPlay muted hidden />
                <canvas ref={canvas} />
            </div>
            {barcode && (
                <div>
                    Bulunan barkod: {barcode}
                </div>
            )}
            {basket.length > 0 && basket.map(item => (
                <div key={item.id}>
                    {item.product} <br />
                    {item.price} ₺ <br />
                    <img src={item.image} alt={item.product} style={{ width: 100, height: 100 }} />
                </div>
            ))}
        </>
    );
}

export default App;
