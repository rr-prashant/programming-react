import { useState } from 'react'
import './App.css'
import Btns from './components/Btns'

function App() {
  const [color, bgChanger] = useState('white');

  function changer(clr) {
    const heading = document.getElementById('headd');
    
    if (clr == '#000000'){
      heading.style.color = '#ffffff'
    }else{
      heading.style.color = '#000000'
    }
    
    bgChanger(clr);
  }
  
  return (
    <>
    <div style={{backgroundColor: color, height: '100vh'}}>
      <h1 id='headd' className='text-center text-6xl font-medium py-56'>BG Changer</h1>
      <div className='bg-gray-800 flex content-end  flex-wrap rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2'>
        <Btns colors='red' onClick={changer} hexa='#f82c00'/>
        <Btns colors='green' onClick={changer} hexa='#0bff5a'/>
        <Btns colors='blue' onClick={changer} hexa='#0be2ff'/>
        <Btns colors='purple' onClick={changer} hexa='#7e0bff'/>
        <Btns colors='white' onClick={changer} hexa='#ffffff'/>
        <Btns colors='orange' onClick={changer} hexa='#ffa60b'/>
        <Btns colors='navy blue' onClick={changer} hexa='#09075f'/>
        <Btns colors='black' onClick={changer} hexa='#000000'/>
      </div>
    </div>
      
    </>
  )
}

export default App
