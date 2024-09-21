import React from 'react'

function Btns({ colors, onClick, hexa }) {
  return (
    <>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={ () => onClick(hexa) }>{ colors }</button>
        
        
    </>
  )
}

export default Btns