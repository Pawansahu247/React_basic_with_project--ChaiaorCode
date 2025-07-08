// 

import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const [strength, setStrength] = useState("")

  const passwordRef = useRef(null)

  // Password generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
    calculateStrength(pass)

  }, [length, numberAllowed, charAllowed])

  // Copy password
  const copyPasswordToClipboard = useCallback(() => {
    if (password === "") return
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [password])

  // Auto-generate password when settings change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // Password strength logic
  const calculateStrength = (pass) => {
    let score = 0
    if (pass.length >= 8) score++
    if (/[0-9]/.test(pass)) score++
    if (/[!@#$%^&*]/.test(pass)) score++
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++

    if (score <= 1) setStrength("Weak")
    else if (score === 2 || score === 3) setStrength("Medium")
    else if (score === 4) setStrength("Strong")
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
      <h1 className='text-white text-center text-2xl mb-4'>Password Generator</h1>

      {/* Password Display & Copy */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >{copied ? "Copied!" : "Copy"}</button>
      </div>

      {/* Controls */}
      <div className='flex text-sm gap-x-2 flex-wrap items-center justify-between'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

      {/* Generate Button */}
      <div className='flex justify-center mt-4'>
        <button
          onClick={passwordGenerator}
          className='bg-green-700 text-white px-4 py-1 rounded-lg'
        >
          Generate Password
        </button>
      </div>

      {/* Password Strength */}
      {password && (
        <p className={`mt-3 text-center font-semibold ${
          strength === "Weak" ? "text-red-500" :
          strength === "Medium" ? "text-yellow-400" :
          "text-green-500"
        }`}>
          Strength: {strength}
        </p>
      )}
    </div>
  )
}

export default App
