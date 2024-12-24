import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './UpandDown/Navbar'
import Footer from './UpandDown/Footer'

function App() {
  

  return (
    <>
    <div className='max-w-7xl mx-auto mb-10'>
      <Navbar></Navbar>
    </div>
      <div className='max-w-7xl mx-auto mb-10'>
       <Outlet></Outlet>
      </div>
      <div className='max-w-7xl mx-auto mb-10'>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
