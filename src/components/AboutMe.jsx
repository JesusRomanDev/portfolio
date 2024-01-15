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
        <section>
            <div>
            <h2 className='font-black text-white'>
                I'm a<span className='text-red-700'> {text}</span><Cursor cursorColor='red' />
            </h2>
            </div>
        </section>
    </>

  )
}

export default AboutMe