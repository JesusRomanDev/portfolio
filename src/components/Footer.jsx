import React, { useState } from 'react'
import Alerta from './Alerta';

const Footer = () => {
    const [copiado, setCopiado] = useState(false);
    const fecha = new Date().getFullYear();
    const copy = () => {
        navigator.clipboard
        .writeText('jesus.romanv@outlook.com');
        setCopiado(true);
        setTimeout(() => {
            setCopiado(false);
        }, 2500);
    }
  return (
    <>
        <footer id='contact' className=' p-4 h-10% w-full left-0 flex justify-evenly bottom-0'>
            <div className='flex flex-col gap-5 w-full'>
                <div className='flex justify-evenly'>
                    <div className='font-bold text-white'>
                        <p className='text-3xl'>Eduardo Roman</p>
                        <p>Front End Developer</p>
                    </div>
                    <div className='flex-col gap-5 font-bold text-white'>
                        <div>
                            <h2>Contact Me</h2>
                            {copiado && <Alerta />}
                        </div>
                        <div className='flex items-center justify-center gap-5 mt-5'>
                            <a aria-label='GitHub' target='_blank' href="https://github.com/JesusRomanDev"><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-125 hover:duration-300 ease-out duration-300 icon icon-tabler icon-tabler-brand-github" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ece0e0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg></a>
                            <a aria-label='LinkedIn' target='_blank' href="https://www.linkedin.com/in/eduardo-roman-9906712a9/"><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-125 hover:duration-300 ease-out duration-300 icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f9f4f4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg></a>
                            <div className='flex items-center border-2 rounded'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="52" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                                </svg>
                                <p className='px-2'>jesus.romanv@outlook.com</p>
                                <svg onClick={copy} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg"  width="22"   height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center font-bold text-white'>
                    <p>{fecha} Eduardo. All rights reserved.</p>
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer