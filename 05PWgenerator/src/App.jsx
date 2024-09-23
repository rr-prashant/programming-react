import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [len, setLen] = useState(6)
  const [isNum, setNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [pw, setPw] = useState("")
  const pwRef = useRef(null)

  const pwGenerator = useCallback(() => {
    let password = ""
    let randomstrings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNum){
      randomstrings = randomstrings + "1234567890"
    }

    if (isChar){
      randomstrings = randomstrings + "~!@#$%^&*(){}[],./'"
    }

    for (let i = 1; i <= len; i++) {
      let pw = Math.floor(Math.random() * randomstrings.length + 1)
      password += randomstrings.charAt(pw)
    }

    setPw(password)

  }, [len, isChar, isNum, setPw])

  const copyToClipboard = useCallback(() => {
    // selects the values of the input taking it as reference
    pwRef.current?.select()
    // it determines what range of character to be selected
    pwRef.current?.setSelectionRange(0,40)
    // writes in clipboard
    window.navigator.clipboard.writeText(pw)
  }, [pw])

  // useEffect to determine when to run password generating function and depending on what
  useEffect(() => {pwGenerator()}, [len, isChar, isNum, pwGenerator])
  return (
    <>
      <div style={{ width: '40rem' }} className=' transform -translate-x-1/2 fixed left-1/2 my-12 px-4 py-6 rounded-2xl bg-white '>
        <h1 className='text-3xl text-center text-black font-semibold'>Password Generator</h1>
        <div className='flex justify-center my-4'>
          <input className='py-1 px-3 w-full outline-none bg-gray-200 rounded-l-lg shadow ' value={pw} placeholder='Password' type="text" readOnly ref={pwRef}/>
          <button className=' py-1 px-2 bg-blue-500 rounded-r-lg' onClick={() => {copyToClipboard()}}>Copy</button>
        </div>
        <div className='flex gap-x-12'>
            <div className='flex gap-x-2'>
              <input type="range" min={6} max={40} className='cursor-pointer' value={len} onChange={(e) => setLen(e.target.value)} />
              <label>Length:{len}</label>
            </div>
            <div className='flex gap-x-12'>
              <div className='flex content-center gap-x-1'>
              {/* prev is the previous value which is false and !prev is true, just the opposite */}
                <input type="checkbox" id="numbers" defaultChecked={isNum} onChange={() => setNum((prev) => !prev)}/> 
                <label htmlFor="numbers">Numbers</label>
              </div>
            
            </div>
            <div className='flex gap-x-12'>
              <div className='flex content-center gap-x-1'>
                <input type="checkbox" id="Char" defaultChecked={isChar} onChange={() => setChar((prev) => !prev)}/>
                <label htmlFor="Char">Characters</label>
              </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default App
