import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className=' p-4 fixed w-full left-0 flex justify-evenly bg-slate-600 bottom-0'>
            <div className='flex flex-col gap-5 w-full'>
                <div className='flex justify-evenly'>
                    <div>
                        <p>Jesus Roman</p>
                        <p>Front End Developer</p>
                    </div>
                    <div className='flex-col gap-5'>
                        <div>
                            <h2>Contact Me</h2>
                        </div>
                        <div className='flex justify-center gap-5 mt-5'>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-125 hover:duration-300 ease-out duration-300 icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ece0e0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg></a>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-125 hover:duration-300 ease-out duration-300 icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f9f4f4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <p>2024 Eduardo. All rights reserved.</p>
                </div>
            </div>

        </footer>
    </>
  )
}

export default Footer