import { useContext, useState } from 'react'
import './App.css'
import Button from './components/buttons/';
// import Input from './components/input/index';
// import CheckBox from './components/checkbox';
import Login from './components/login';
import { MyComponent } from './MyComponent';
import { MyContext } from './context/MyContext';

function App() {
  // const [state, setState] = useState("Merhaba");
  // Number(localStorage.setItem("counter", 25))
  // const [counter, setCounter] = useState(
  //   localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
  // )
  // const data = [
  //   { id: 1, name: "süleyman" },
  //   { id: 2, name: "süleyman2" },
  //   { id: 3, name: "süleyman3" },
  // ]

  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <div>
        {/* {state}{counter}
      <h1 className="text-3xl font-bold justify-center">
        {data.map((item) => (
          <div className="text-3xl font-bold mt-3 bg-red-400 justify-center items-center rounded-md" key={item.id}>{item.name}</div>
        ))}
      </h1>
      <h1 className='text-3xl text-red-400 font-bold cursor-pointer' onClick={() => setState("Ali")}> Değiştir</h1>
      <Button title='artır' />
      <Input />
      <CheckBox /> */}
        {/* <Login /> */}
        <p>Count değeri: {count}</p>
        <button onClick={() => setCount(count + 1)}>Artır</button>
      </div>
      <MyComponent />
    </div>
  )
}

export default App
