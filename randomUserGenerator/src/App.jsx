// import React from 'react'
// import { useState } from 'react';
// function App() {

//   const [count, setCount] = useState(0)
//    const counterAdd= () => {
//     if(count<100){
//     setCount(count+1)
//    }
//   }
//    const counterRemove = () => {
//     if(count>0){
//     setCount(count-1)
//     }
//    }
//   return (

//  <div className="flex justify-center items-center h-screen bg-gray-100">
//      <div className="text-center space-y-4">
//         <h1 className="text-red-600 text-xl font-bold">Hello Counter-App</h1> 
//          <h2 className='bg-gray-200 py-3 outline-2 my-5'>Counter Value:" {count} "   </h2>
    
//            <div className="flex space-x-4 gap-4">
//                  <button 
//                  onClick={counterAdd}
//                  className="bg-blue-500 px-4 py-2 rounded text-white">Increment</button>
//                   <button 
//                   onClick={counterRemove}
//                   className="bg-red-500 px-4 py-2 rounded text-white">Decrement</button>
//           </div>
//         </div>
//       </div>
  
//   )
// }

// export default App

//////////////// use state basics///////////////


// import



///////////////////////////use effect /////////////

// 

import React, { useState, useEffect } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);         // 1️⃣ Store user data
  const [loading, setLoading] = useState(false);  // 2️⃣ Store loading status

  const getUser = async () => {         // 3️⃣ Function to fetch data
    setLoading(true);                   // 4️⃣ Show loading before fetch
    const res = await fetch("https://randomuser.me/api/");  // 5️⃣ Fetch API
    const data = await res.json();      // 6️⃣ Convert response to JS object
    setUser(data.results[0]);           // 7️⃣ Save user data in state
    setLoading(false);                  // 8️⃣ Turn off loading after fetch
  };

  useEffect(() => {  // 9️⃣ Runs once when page first loads
    getUser();       // 10️⃣ Call the fetch function
  }, []);

return (
  <div className="flex flex-col items-center p-4 bg-amber-400 h-screen">
    <h1 className="text-xl font-bold mb-4">Random User Generator</h1>

    {/* 11️⃣ Show loading while fetching */}
    {/* {loading && <p>Loading user...</p>} */}
    {loading && (
  <div className="flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
  </div>
)}


    {/* 12️⃣ Show user info only after loading is done */}
    {user && !loading && (
      <div className="text-center items-center">
        <img
          src={user.picture.large}
          alt="Profile"
          className="rounded-full mb-2"
        />
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <p>{user.email}</p>
        <p>{user.gender}</p>
      </div>
    )}

    {/* 13️⃣ Re-fetch user on click */}
    <button
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={getUser}
    >
      Get Another User
    </button>
  </div>
);
}
export default RandomUser;
