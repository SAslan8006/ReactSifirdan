import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Artır</button>
      <button onClick={decrement}>Azalt</button >
    </>
  )
}

export default App
