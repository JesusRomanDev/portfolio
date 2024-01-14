import React, { useState } from 'react'
import Nieto from './Nieto'

const Padre = () => {
    const [prueba, setPrueba] = useState('probandoState')

  return (
    <Nieto prueba={prueba}/>
  )
}

export default Padre