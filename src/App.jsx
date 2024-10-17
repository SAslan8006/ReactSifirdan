import './App.css'

function App() {
  const name = "Süleyman"

  const data = [
    { id: 1, name: "süleyman" },
    { id: 2, name: "süleyman2" },
    { id: 3, name: "süleyman3" },
  ]
  return (
    <>
      <h1 className="text-3xl font-bold justify-center">
        {data.map((item) => (
          <div className="text-3xl font-bold mt-3 bg-red-400 justify-center items-center rounded-md" key={item.id}>{item.name}</div>
        ))}
      </h1>
      <h1 className='text-3xl text-red-400 font-bold cursor-pointer'> {name}</h1>

    </>
  )
}

export default App
