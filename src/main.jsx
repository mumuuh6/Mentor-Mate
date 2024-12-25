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
import ADDtutor from './Tutorinfor/ADDtutor';
import FindTutors from './Tutorinfor/FindTutors';
import TutorDetails from './Tutorinfor/TutorDetails';
import Privateroute from './Authentication/Privateroute';
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
        path:"/addtutor",
        element:<ADDtutor></ADDtutor>
      },
      {
        path:"/tutor/:id",
        element:<Privateroute><TutorDetails></TutorDetails></Privateroute>,
        loader:({params})=>fetch(`http://localhost:5000/tutor/${params.id}`)
      },
      {
        path:"/find-tutors",
        element:<FindTutors></FindTutors>
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
