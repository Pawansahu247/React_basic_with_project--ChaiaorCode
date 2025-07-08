import React from 'react'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Pawan",
    age: 21
  }
  return (
    <>
   
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="Pawan" btnText="visit me"/>
    <Card username="roshan"/>
  </>
)

}

export default App
