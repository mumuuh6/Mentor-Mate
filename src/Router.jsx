import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { useContext } from "react";

import Signup from "./UserDocument/Signup";
import Signin from "./UserDocument/Signin";
import Home from './Homepage/home';
import ADDtutor from './Tutorinfor/ADDtutor';
import FindTutors from './Tutorinfor/FindTutors';
import TutorDetails from './Tutorinfor/TutorDetails';
import Privateroute from './Authentication/Privateroute';
import Mybookedtutor from './Tutorinfor/Mybookedtutor';
import Mytutorials from './Tutorinfor/Mytutorials';
import Updatepage from './Tutorinfor/Updatepage';
import ErrorPage from './Homepage/ErrorPage';
import Languagep2 from './Homepage/Languagep2';
import Blogs from "./Blogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: (

            <App />

        ),
        errorElement: (

            <ErrorPage />

        ),
        children: [
            {
                path: "/Signup",
                element: (

                    <Signup />

                ),
            },
            {
                path: "/",
                element: (

                    <Home />

                ),
            },
            {
                path: "/blogs",
                element: (

                    <Blogs></Blogs>

                ),
            },
            {
                path: "/addtutor",
                element: (

                    <Privateroute>
                        <ADDtutor />
                    </Privateroute>

                ),
            },
            {
                path: "/tutor/:id",
                element: (

                    <Privateroute>
                        <TutorDetails />
                    </Privateroute>

                ),
                loader: ({ params }) =>
                    fetch(`https://mentor-mate-server-side.vercel.app/tutor/${params.id}`),
            },
            {
                path: "/update/:id",
                element: (

                    <Privateroute>
                        <Updatepage />
                    </Privateroute>

                ),
                loader: ({ params }) =>
                    fetch(`https://mentor-mate-server-side.vercel.app/tutoration/${params.id}`),
            },
            {
                path: "/my-booked-tutors",
                element: (

                    <Privateroute>
                        <Mybookedtutor />
                    </Privateroute>

                ),
            },
            {
                path: "/mytutorial",
                element: (

                    <Privateroute>
                        <Mytutorials />
                    </Privateroute>

                ),
            },
            {
                path: "/find-tutors",
                element: (

                    <FindTutors />

                ),
            },
            {
                path: "/find-tutors/:language",
                element: (

                    <Languagep2 />

                ),
                loader: ({ params }) =>
                    fetch(`https://mentor-mate-server-side.vercel.app/tutori/${params.language}`),
            },
            {
                path: "/Login",
                element: (

                    <Signin />

                ),
            },
        ],
    },
]);

export default router;
