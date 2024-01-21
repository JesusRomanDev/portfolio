import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/UseContext'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

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
      <section className='z-30 fixed sm:flex sm:flex-col py-4 md:grid md:grid-cols-2 gap-x-2 w-screen bg-slate-600'>
        <div className='flex justify-evenly'>
          <a href="" className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-150 hover:duration-300 ease-out duration-300 icon-tabler icon-tabler-code" width="36" height="36"         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f6f6f6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 8l-4 4l4 4" />
            <path d="M17 8l4 4l-4 4" />
            <path d="M14 4l-4 16" />
            </svg>
            <p className='text-white font-bold text-xl px-5'>Welcome</p>
          </a>
        </div>
        <div className='flex justify-center place-items-center'>
          <nav className='flex-col sm:flex-row relative overflow-hidden flex gap-x-4 p-3 text-white'>
            <Link className='navCustom active' to="/">Home</Link>
            <Link className='navCustom' to="/">About me</Link>
            <Link className='navCustom' to="/">Skills</Link>
            <Link className='navCustom' to="/">Education</Link>
            <Link className='navCustom' to="/">Projects</Link>
            <Link className='navCustom' to="/">Contact</Link>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Heading