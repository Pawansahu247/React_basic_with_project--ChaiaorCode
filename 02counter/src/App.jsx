import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 15;
  const Addvalue = () => {
    // counter = counter+1;
    if(counter<20){
          setCounter(counter+1)    

    }
  }
  const Removevalue = () => {
    // counter = counter+1;
    if(counter>0)
    setCounter(counter-1)    
  }



  return (
    <>
     <h1>Hello every one </h1>
     <h2>the count is: {counter}</h2>

     <button
     onClick={Addvalue}
        >Add value</button>
     <br />
     <button
     onClick={Removevalue}
     >Remove value</button>
    </>
  )
}

export default App
