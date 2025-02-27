import { Navigate } from "react-router-dom";

import { Spinner } from "@material-tailwind/react";
import { MentorContext } from "../../Mentorprovider";
import { useContext } from "react";

const Privateroute = ({ children }) => {
    const { user, loader } = useContext(MentorContext)
    if (user) {
        return children;
    }
    if (loader) {
        return <div className="flex justify-center items-center gap-8 h-screen w-full">
            <Spinner color="blue" className="h-12 w-12" />

        </div>
    }
    return (
        <div>
            <Navigate to='/Login'></Navigate>
        </div>
    );
};

export default Privateroute;