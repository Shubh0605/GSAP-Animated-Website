import { Route, Routes } from 'react-router-dom'
import Project from './pages/Project'
import Home from './pages/Home'
import Agents from './pages/Agents'
import { useRef } from 'react'
import Navbar from './Components/Navigation/Navbar'
import FullScreenNav from './Components/Navigation/FullScreenNav'

const App = () => {
  
  return (
    <div className='text-white overflow-x-hidden'>
      <Navbar/>
      <FullScreenNav/>

    

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      </div>
  )
}

export default App