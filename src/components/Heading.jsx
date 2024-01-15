import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/UseContext'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Heading() {
    const [count, setCount] = useState(0)
    const [text] = useTypewriter({
      words : ['Web Developer', 'Mechatronics Engineer', "Lifetime Learner"],
      loop: {},
      deleteSpeed: 80
    });
    const nivel = useContext(AuthContext)
    // console.log(nivel);
    useEffect(()=>{
        console.log(nivel.usuario);
    }, [])
  return (
    <>
      <div className='py-4 grid grid-cols-2 gap-x-2 w-screen bg-slate-600'>
        <div>
          <h1 className='block text-center'>Hi, my name is Jesus Eduardo</h1>
          <h2 className='font-black items-center text-center justify-center'>
            I'm a <span className='text-red-700'> {text}</span> <Cursor cursorColor='red' />
          </h2>
        </div>
        <div className='flex place-items-center'>
          <nav className='box relative overflow-hidden flex gap-x-2 p-2 border-solid border-orange-800 border-2 rounded'>
            <a href="">Home</a>
            <a href="">About me</a>
            <a href="">Education</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
          </nav>
        </div>

      </div>
    </>
  )
}

export default Heading