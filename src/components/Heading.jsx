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
      <div className='sm:flex sm:flex-col py-4 md:grid md:grid-cols-2 gap-x-2 w-screen bg-slate-600'>
        <div>
          <h1 className='text-white block text-center'>Hi, my name is Jesus Eduardo</h1>
          <h2 className='font-black items-center text-center justify-center text-white'>
            I'm a<span className='text-red-700'> {text}</span><Cursor cursorColor='red' />
          </h2>
        </div>
        <div className='flex justify-center place-items-center'>
          <nav className='flex-col sm:flex-row relative overflow-hidden flex gap-x-4 p-3 border-solid border-orange-800 border-2 rounded text-white'>
            <a href="" className='navCustom'>Home</a>
            <a href="" className='navCustom'>About me</a>
            <a href="" className='navCustom'>Education</a>
            <a href="" className='navCustom'>Skills</a>
            <a href="" className='navCustom'>Projects</a>
            <a href="" className='navCustom'>Contact</a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Heading