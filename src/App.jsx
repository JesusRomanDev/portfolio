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
import Education from './components/Education';

function App() {
  let slides = [
    {
      id: 0,
      image: "../images/todoList.png",
      alt: "project1",
      title: "Todo List"
    },
    {
      id:1,
      image: "../images/creditCard.png",
      alt: "project2",
      title: "Credit Card"
    },
    {
      id:2,
      image: "../images/git.png",
      alt: "project3",
      title: "Ejemplo"
    }
  ]

  return (
    <>
      <AuthProvider>
        <Heading />
        <AboutMe />
        <Skills />
        <Education />
        <section className='bg-slate-500'>
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
