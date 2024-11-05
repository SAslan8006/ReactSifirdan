import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle';
import useCopyToClipboard from './hooks/useCopyToClipboard';

function App() {
  const { count, increment, decrement } = useCounter();
  const { chage, isToggled } = useToggle();
  const [copied, copy] = useCopyToClipboard("Merhaba");

  return (
    <>
      {isToggled && <div>Merhaba</div>} <div>{count}</div>
      {copied && <div>Kopyalandı</div>}
      <button onClick={increment}>Artır</button>
      <button onClick={chage}>Göster/Gizle</button>
      <button onClick={decrement}>Azalt</button >
      <button onClick={copy}>Kopyala</button>

    </>
  )
}

export default App
