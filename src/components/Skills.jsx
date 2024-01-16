import React from 'react'

const Skills = () => {
  return (
    <>
        <section className='bg-slate-500 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-white text-3xl p-5'>Skills</h2>
            <div className='grid w-1/2 place-items-center grid-cols-5 gap-y-20 mb-14'>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/HTML5_badge.png" alt="" /><p className='text-white'>HTML</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/css.png" alt="" /><p className='text-white'>CSS</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/js.png" alt="" /><p className='text-white'>JavaScript</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/twind.svg" alt="" /><p className='text-white'>Tailwind</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/bstrap.svg" alt="" /><p className='text-white'>Bootstrap</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/react.png" alt="" /><p className='text-white'>React</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/vite.png" alt="" /><p className='text-white'>Vite</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-16 h-10' src="../../images/Node.js_logo.svg.png" alt="" /><p className='text-white'>NodeJS</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-16 h-10' src="../../images/npm.png" alt="" /><p className='text-white'>NPM</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/mongo.webp" alt="" /><p className='text-white'>MongoDB</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/sql.png" alt="" /><p className='text-white'>SQLite</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/git.png" alt="" /><p className='text-white'>Git</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/github.png" alt="" /><p className='text-white'>GitHub</p></div>
                <div className='gap-y-2 border-2 rounded-md border-slate-300 flex flex-col justify-center items-center bg-indigo-500 h-36 w-36'><img className='w-20 h-20' src="../../images/cy.png" alt="" /><p className='text-white'>Cypress</p></div>
            </div>
        </section>

    </>
  )
}

export default Skills