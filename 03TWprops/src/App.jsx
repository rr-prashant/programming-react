import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCont from './components/ImageCont'

function App() {
  // let contObj = {
  //   username: "Prashant rai",
  //   imgsrc: "https://images.pexels.com/photos/28125553/pexels-photo-28125553/free-photo-of-a-white-ball-on-a-stick-in-front-of-a-black-tiled-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // }
  return (
    <>
      <h1>Tailwind CSS with React Props</h1>
      {/* <ImageCont imgObje = { contObj }/> */}
      <ImageCont  username='ABC' description="asdasdj asbdkjbask abkjsdbkajs bajksdbak baksjdb" />
      <ImageCont  username='CDE' />
    </>
  )
}

export default App
