import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './UpandDown/Navbar'
import Footer from './UpandDown/Footer'
import { ThemeProvider } from '@material-tailwind/react'
import { useContext } from 'react'
import { MentorContext } from '../Mentorprovider'

function App() {
  const lightTheme = {
    button: {
        styles: {
            base: {
                initial: "bg-blue-500 text-white rounded-lg",
            },
        },
    },
  };
  
  const darkTheme = {
    button: {
        styles: {
            base: {
                initial: "bg-gray-800 text-yellow-400 rounded-lg",
            },
        },
    },
  };
const {isDarkMode}=useContext(MentorContext)

  return (
    <>
    <div className='max-w-7xl mx-auto mb-10'>
      <Navbar></Navbar>
    </div>
      <div className='max-w-7xl mx-auto mb-10'>
       <div className={`${isDarkMode?"bg-white":'bg-purple-50'}`}>
       <Outlet></Outlet>
       </div>
      </div>
      <div className='max-w-7xl mx-auto mb-10'>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
