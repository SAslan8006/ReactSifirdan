import { useState } from 'react'
import './App.css'

function App() {
  //Union Types
  //  let age:string|number = 25;
  //  let name: string|number = 'John';
  // String , boolean , number
  // interface- type: kendi tipimizi oluşturmamızı sağlıyor. 
  type User={
    name: string,
    age: number,
    email: string
  }

  // let array : string[] = ['John','John','John'];
  const array2: User[] = [{name: 'John', age: 25, email: 'd2j1K@example.com'}]
  const user: User = {
    name: 'John',
    age: 25,
    email: 'd2j1K@example.com'
  }

interface User2{
  name: string,
  age?: number, // age zorunlu değildir
  email: string
}

const user2: User2 = {
  name: 'John',
  age: 25,
  email: 'd2j1K@example.com'
}

 console.log(user2.name);
  return (
    <>

    </>
  )
}

export default App


//Funtion Önemli bir durum

function getFullName(name: string, surname: string): string {
  return name + ' ' + surname
} 

console.log(getFullName('John', 'Doe'))


//Function Overloading donen durum da nasıl geleceğini belirleyebiliriz
function add(a: number, b: number): number|string {
  return a + b
}

console.log(add(5, 10))

// Döndürmeyecekse : void : Geriye birşey döndürmeyen metottur.
function write(array:Array<string>):void{
  array.forEach((value:string)=>console.log(value))
}

let array:Array<string> = ['aasda','basdas','adasdac']
write(array)


interface User{
  name: string,
  age: number,
  email: string
}

function write2(array:Array<User>):void{
  array.forEach((value:User)=>console.log(value.name))
}
const obj1: User = {
  name: 'John',
  age: 25,
  email: 'd2j1K@example.com'
}

const obj2: User = {
  name: 'John',
  age: 25,
  email: 'd2j1K@example.com'
}

const myArray:Array<User> = [obj1,obj2]

console.log(myArray)
write2(myArray)


function yazdir(array:string[]):void{
  console.log(array)
}

yazdir(array)

// Generic Fonksiyon demektir :  <T>
function yazdir1<T>(array:T[]):void{
  console.log(array)
}

yazdir1(["array1","array2"])
yazdir1([1,2,3])
yazdir1([true,false])


interface GenericType<T>{
  name: string,
  age: number,
  email: T
}
const obj3: GenericType<string> = {
  name: 'John',
  age: 25,
  email: 'd2j1K@example.com'
} // string

const obj4: GenericType<number> = {
  name: 'John',
  age: 25,
  email: 1
} // number

const myArray1:GenericType<string|number>[] = [obj3,obj4]

console.log(myArray1)
