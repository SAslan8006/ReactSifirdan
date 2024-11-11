import React, { useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function MUISkeleton() {
    const [loading, setLoading] = React.useState(true);
    //resimleri 2.5 saniye sonra yüklüyor hissi veren skeleton yapıldı
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
    return (
        <div>
            {loading ? (<Skeleton
                animation="wave"
                variant="rounded"
                width={250}
                height={150} />) : (<img width={250} height={150} src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' />)}
        </div>
    )
}

export default MUISkeleton