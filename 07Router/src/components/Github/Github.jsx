import {React, useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rr-prashant')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center bg-gray-800 text-4xl text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" width={300}/>
    </div>
    
  )
}

export default Github

export const loaderinfo = async () => {
    const res = await fetch('https://api.github.com/users/rr-prashant')
    return res.json()
}