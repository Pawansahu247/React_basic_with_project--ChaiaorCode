import React from 'react'
import { useState } from 'react'
const App = () => {
  const [color, setColor] = useState("olive")
  return (
   <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl '>

          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "red"}}>Red</button>

           <button onClick={() => setColor("Green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "Green"}}>Green</button>
           
            <button onClick={() => setColor("Blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "Blue"}}>Blue</button>
           
            <button onClick={() => setColor("Black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "Black"}}>Black</button>
           
            <button onClick={() => setColor("white")} className='outline-2 px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: "white"}}>white</button>
           
            <button onClick={() => setColor("grey")} className='outline outline-2 outline-black px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "grey"}}>grey</button>
           
            <button  onClick={() => setColor("Purple")}className='outline outline-2 outline-black  px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "Purple"}}>Purple</button>
           
            <button onClick={() => setColor("yellow")} className='outline outline-2 outline-black px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: "yellow"}}>yellow</button>

             <button  onClick={() => setColor("Orange")}className='outline outline-2 outline-black px-4 py-1 rounded-full text-white shadow-lg'style={{backgroundColor: "Orange"}}>Orange</button>

        </div>
      </div>
    </div>
  )
}

export default App
