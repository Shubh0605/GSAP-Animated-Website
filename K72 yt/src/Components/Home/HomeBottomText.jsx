import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <p className='absolute lg:w-[18vw] w-60 lg:right-5 right-2 lg:bottom-36 bottom-22 font-[font1] text-sm  leading-tight '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center lg:px-14 px-3 pt-1 border-white rounded-full uppercase'>
        <Link className=' text-[6vw] lg:mt-6' to='Project'>Project</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 flex items-center lg:px-14 px-3 pt-1 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='Agents'>Agents</Link>
      </div>
    </div>
  )
}

export default HomeBottomText