import { useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Heading from './components/Heading';
import { AuthProvider } from './context/UseContext';
import Padre from './components/Padre';
import Hijo from './components/Hijo';
import Nieto from './components/Nieto';

function App() {

  return (
    <>
      <h1 className='block text-center'>Hi, my name is Jesus Eduardo</h1>
      <AuthProvider>
        <Heading />
      </AuthProvider>
      <Padre>
        <Hijo>
          <Nieto>

          </Nieto>
        </Hijo>
      </Padre>
    </>
      
  )
}

export default App
