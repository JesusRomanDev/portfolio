import React, { useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const AboutMe = () => {
    const [count, setCount] = useState(0)
    const [text] = useTypewriter({
      words : ['Web Developer', 'Mechatronics Engineer', "Lifetime Learner"],
      loop: {},
      deleteSpeed: 80
    });
  return (
    <>
        <section className='w-4/5 h-1/4 mx-auto flex gap-5 justify-center'>
            <div className='w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-white block'>Hi, my name is Jesus Eduardo</h1>
                <h2 className='font-black text-white'>
                    I'm a<span className='text-red-700'> {text}</span><Cursor cursorColor='red' />
                </h2>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center'>
                <p className='text-center block'>seccion 2</p>
            </div>
        </section>
    </>

  )
}

export default AboutMe