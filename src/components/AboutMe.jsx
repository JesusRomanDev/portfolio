import React, { useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const AboutMe = () => {
    const [count, setCount] = useState(0)
    const [text] = useTypewriter({
      words : ['Front End Developer', 'Mechatronics Engineer', "Lifelong Learner"],
      loop: {},
      deleteSpeed: 80
    });
  return (
    <>
        <section className='mt-20 w-4/5 h-1/2 mx-auto flex gap-5 justify-center'>
            <div className='w-1/2 flex flex-col justify-center text-white'>
                <h1 className='text-left block text-4xl'>Hi, my name is <span className='font-bold text-red-800'>Jesus Eduardo</span></h1>
                <h2 className='font-black mt-5'>
                    I'm a<span className='text-red-700'> {text}</span><Cursor cursorColor='red' />
                </h2>
                <p className='mt-5 font-semibold'>Based in <span className='text-red-500'>Monterrey Nuevo Leon, Mexico.</span> </p>
                <p className='font-semibold mt-5'>Graduated in Universidad Autonoma de Nuevo Leon as a Mechatronics Engineer, i'm a passionate person about the tech industry and everything that involves it, open to challenges, currently looking for my first job as a developer.</p>

                <p className='font-semibold'>Previously i had experience as a Product Engineer, but after some time i realized that i wanted to go after what i enjoy the most, to <span className='text-red-500'> &lt; code &gt; </span> .</p>
            </div>
            <div className='w-1/4 flex flex-col justify-center items-center'>
                <img className='sliderUp' src="../../images/dev.png" alt="" />
            </div>
        </section>
    </>

  )
}

export default AboutMe