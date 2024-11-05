import './App.css'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle';

function App() {
  const { count, increment, decrement } = useCounter();
  const { chage, isToggled } = useToggle();

  return (
    <>
      {isToggled && <div>Merhaba</div>} <div>{count}</div>
      <button onClick={increment}>Artır</button>
      <button onClick={chage}>Artır</button>
      <button onClick={decrement}>Azalt</button >
    </>
  )
}

export default App
