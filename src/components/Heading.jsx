import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/UseContext'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
// import { Link } from 'react-router-dom'
import { Link, animateScroll } from 'react-scroll'

function Heading() {
    const nivel = useContext(AuthContext)
    // console.log(nivel);
    useEffect(()=>{
        console.log(nivel.usuario);
    }, [])
  

    const options = {
      // your options here, for example:
      duration: 500,
      smooth: true,
    };

    const topPage = () => {
      animateScroll.scrollToTop(options)
    }

  return (
    <>
      <section id='home' className='z-30 fixed top-0 sm:flex sm:flex-col py-4 md:grid md:grid-cols-2 gap-x-2 w-screen opacity-30 bg-slate-600'>
        <div className='flex justify-evenly'>
          <Link to='home' offset={0} onClick={topPage} className='cursor-pointer flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-150 hover:duration-300 ease-out duration-300 icon-tabler icon-tabler-code" width="36" height="36"         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f6f6f6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 8l-4 4l4 4" />
            <path d="M17 8l4 4l-4 4" />
            <path d="M14 4l-4 16" />
            </svg>
            <p className='text-white font-bold text-xl px-5'>Eduardo Roman</p>
          </Link>
        </div>
        <div className='flex justify-center place-items-center'>
          <nav className='grid grid-cols-2 sm:flex sm:flex-row relative overflow-hidden gap-x-6 sm:gap-x-4 p-3 text-white'>
            {/* <Link onClick={topPage} to='/' spy={true} smooth={true} hashSpy={true} offset={-500} activeClass='colores' duration={500} className='navCustom'>Home</Link> */}
            <Link to="about" spy={true} smooth={true} hashSpy={true} offset={-80} duration={500} activeClass='colores' className='navCustom'>About me</Link>
            <Link to="skills" spy={true} smooth={true} hashSpy={true} offset={-80} duration={500} activeClass='colores' className='navCustom'>Skills</Link>
            <Link to="education" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} activeClass='colores' className='navCustom'>Education</Link>
            <Link to="projects" spy={true} smooth={true} hashSpy={true} offset={-100} duration={500} activeClass='colores' className='navCustom'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} hashSpy={true} offset={-20} duration={500} className='justify-self-center col-span-2
             navCustom'>Contact</Link>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Heading