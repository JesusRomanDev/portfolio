import React from 'react'

const Skills = () => {
  return (
    <>
        <section id='skills' className='py-5 bg-slate-500 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white text-3xl p-5'>Skills</h2>
            <div className='grid w-1/2 place-items-center grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:gap-x-36 gap-x-20  gap-y-20 mb-14'>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/HTML5_badge.png" alt="" /><p className='text-white font-bold'>HTML</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/css.png" alt="" /><p className='text-white font-bold'>CSS</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/js.png" alt="" /><p className='text-white font-bold'>JavaScript</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/twind.svg" alt="" /><p className='text-white font-bold'>Tailwind</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/bstrap.svg" alt="" /><p className='text-white font-bold'>Bootstrap</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/react.png" alt="" /><p className='text-white font-bold'>React</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/vite.png" alt="" /><p className='text-white font-bold'>Vite</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className='w-16 h-10' src="img/Node.js_logo.svg.png" alt="" /><p className='text-white font-bold'>NodeJS</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className='w-16 h-10' src="img/npm.png" alt="" /><p className='text-white font-bold'>NPM</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/mongo.webp" alt="" /><p className='text-white font-bold'>MongoDB</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/sql.png" alt="" /><p className='text-white font-bold'>SQLite</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/git.png" alt="" /><p className='text-white font-bold'>Git</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/github.png" alt="" /><p className='text-white font-bold'>GitHub</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/cy.png" alt="" /><p className='text-white font-bold'>Cypress</p></div>
                <div className='hover:scale-125 hover:bg-slate-900 hover:duration-300 ease-out duration-300 gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-slate-600 h-24 w-24 sm:h-36 sm:w-36'><img className=' w-10 h-10 sm:w-20 sm:h-20' src="img/photoshop.png" alt="" /><p className='text-white font-bold'>Photoshop</p></div>
            </div>
        </section>

    </>
  )
}

export default Skills