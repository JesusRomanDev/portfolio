import { useEffect, useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {Fade} from 'react-awesome-reveal';
import Heading from './components/Heading';
import { AuthProvider } from './context/UseContext';
import Padre from './components/Padre';
import Hijo from './components/Hijo';
import Nieto from './components/Nieto';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';
import { animateScroll } from 'react-scroll';

function App() {

  const[isLoading, setIsLoading] = useState(true);

  let slides = [
    {
      id:0,
      image: "img/agenciaViajes.PNG",
      alt: "project1",
      title: "Agencia de Viajes"
    },
    {
      id:1,
      image: "img/csv.PNG",
      alt: "csv",
      title: "csv"
    },
    {
      id: 2,
      image: "img/bienesRaices.PNG",
      alt: "project1",
      title: "Bienes Raices CRUD"
    },
    {
      id:3,
      image: "img/pacientes.PNG",
      alt: "project2",
      title: "Credit Card"
    },
    {
      id:4,
      image: "img/miraiAnime.PNG",
      alt: "project3",
      title: "Ejemplo"
    }
  ]
  const options = {
    // Your options here, for example:
    duration: 500,
    smooth: true,
  };

  useEffect(()=>{
    const fakeDataFetch = () =>{
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

    fakeDataFetch()
    animateScroll.scrollMore(-100, options)
  },[])

  return (
    <>
      <AuthProvider>
        {isLoading ? <PreLoader /> : 
        <>
          <Heading />
          <Fade>
            <AboutMe />
            <Skills />
          </Fade>
          <Fade triggerOnce fraction={0} delay={100} direction='left'>
            <Education />
            <section className='py-5 bg-slate-500'>
              <Projects slides={slides} />
            </section>
          </Fade>
          <Footer />
        </>
        }
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
