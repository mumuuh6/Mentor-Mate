import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Signup from "./UserDocument/Signup";
import Signin from "./UserDocument/Signin";
import Mentorprovider from '../Mentorprovider';
import Home from './Homepage/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/Signup",
        element:<Signup></Signup>
      },
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Login",
        element:<Signin></Signin>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mentorprovider>
    <RouterProvider router={router} />
    </Mentorprovider>
    

  </StrictMode>,
)
