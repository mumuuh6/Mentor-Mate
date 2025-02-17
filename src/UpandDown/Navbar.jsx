import React, { useContext } from "react";
import { Avatar } from "@material-tailwind/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
    Navbar as MTNavbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { MentorContext } from "../../Mentorprovider";

const NavList = () => {
    const { isDarkMode, setIsDarkMode } = useContext(MentorContext)
    const handletheme = () => {

        setIsDarkMode(!isDarkMode)
    }
    const { user } = useContext(MentorContext)
    return (
        <List className="mb-6 lg:mt-0 lg:mb-0 lg:flex-row  lg:p-1">
            <ListItem className="flex items-center gap-2 py-2 pr-4">
                <Link to="/" className="text-blue-gray-600 hover:text-blue-500">Home</Link>
            </ListItem>
            <ListItem className="flex items-center gap-2 py-2 pr-4">
                <Link to="/find-tutors" className="text-blue-gray-600 hover:text-blue-500">Find Tutors</Link>
            </ListItem>

            {
                user && <div className=" flex flex-col lg:flex-row">
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <Link to="/addtutor" className="text-blue-gray-600 hover:text-blue-500">Add Tutorials</Link>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <Link to="/my-booked-tutors" className="text-blue-gray-600 hover:text-blue-500">My Booked Tutors</Link>
                    </ListItem>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <Link to="/mytutorial" className="text-blue-gray-600 hover:text-blue-500">My Tutorials</Link>

                    </ListItem>
                </div>
            }


            <ListItem className="flex items-center gap-2 py-2 pr-4">
            <Link to="/blogs" className="text-blue-gray-600 hover:text-blue-500">Blogs</Link>

            </ListItem>
            {/* <ListItem className="flex items-center gap-2 py-2 pr-4">
                <button onClick={handletheme}>Theme</button>

            </ListItem> */}

        </List>
    );
};



const Navbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, userSignOut } = useContext(MentorContext)
    const handlesignout = () => {
        userSignOut()
            .then(res => console.log('success'))
            .catch(err => console.log(err))
    }
    const account =

        user ? <div className="flex gap-4">
            <Tippy content={user.displayName} placement="bottom">
                <Avatar
                    src={user.photoURL}
                    alt="avatar"
                    withBorder={true}
                    className="p-0.5"
                />
            </Tippy>
            <p onClick={handlesignout} className="text-white bg-black hover:shadow-2xl rounded-3xl p-3">
                SignOut
            </p>
        </div> : <div>
            <Link to="/login" className="text-gray-500 hover:bg-gray-300 rounded-3xl p-3">
                Log In
            </Link>
            <Link to="/signup" className="text-white bg-black hover:shadow-2xl rounded-3xl p-3">
                Sign Up
            </Link>
        </div>
        ;

    React.useEffect(() => {
        const handleResize = () =>
            window.innerWidth >= 960 && setOpenNav(false);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <MTNavbar className="bg-purple-50 max-w-7xl mx-auto px-4 py-2 fixed top-0 z-50 ">
            <div className="flex justify-evenly items-center">
                <Typography as="a" href="#" variant="h6" className="mr-4 text-black flex justify-center items-center gap-3">
                    <img
                        src="https://i.ibb.co/2jnKzYW/DALL-E-2024-12-24-00-11-14-A-fun-and-attractive-cartoon-style-illustration-of-two-hands-holding-the.webp"
                        alt=""
                        className="w-16"
                    />
                    <p>MentorMate</p>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden lg:flex gap-4">
                    {account}
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                {account}
            </Collapse>

        </MTNavbar>
    );
};

export default Navbar;
