import { useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Heading from './components/Heading';
import { AuthProvider } from './context/UseContext';
import Padre from './components/Padre';
import Hijo from './components/Hijo';
import Nieto from './components/Nieto';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  let slides = [
    {
      id: 0,
      image: "../images/todoList.png"
    },
    {
      id:1,
      image: "../images/creditCard.png"
    },
    {
      id:2,
      image: "../images/git.png"
    }
  ]

  return (
    <>
      <AuthProvider>
        <Heading />
        <AboutMe />
        <Skills />
        <section className='w-[30%] m-auto'>
          <Projects slides={slides} />
        </section>
        <Footer />
      </AuthProvider>
      {/* <Padre>
        <Hijo>
          <Nieto>

          </Nieto>
        </Hijo>
      </Padre> */}
    </>
      
  )
}

export default App
