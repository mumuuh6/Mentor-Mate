import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import router from './Router';

import Mentorprovider from '../Mentorprovider';
import { RouterProvider } from 'react-router-dom';
import UseTheme from './UseTheme';
import { ThemeProvider } from '@material-tailwind/react';



// const {isDarkMode} = UseTheme()
// console.log(isDarkMode)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider >
    <Mentorprovider >
    <RouterProvider router={router} />
    </Mentorprovider>
    </ThemeProvider>
    

  </StrictMode>,
)
