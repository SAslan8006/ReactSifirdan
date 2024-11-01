import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //Union Types
  //  let age:string|number = 25;
  //  let name: string|number = 'John';
  // String , boolean , number
  // interface- type: kendi tipimizi oluşturmamızı sağlıyor. 
  type user{
    name: string,
    age: number,
    email: string
  }

  return (
    <>

    </>
  )
}

export default App
