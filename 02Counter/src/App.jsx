import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  const increaseCount = () => {

    if (counter < 20){
      counter += 1
      setCounter(counter)
    }
  }

  const decreaseCount = () => {
    if (counter > 0){
      counter -= 1
      setCounter(counter)
    }
    
  }

  return (
    <>
      <h1>Counter using useState HOOK</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increaseCount}>Increase count : {counter}</button>
      <button onClick={decreaseCount}>Decrease count : {counter}</button>
    </>
  )
}

export default App
