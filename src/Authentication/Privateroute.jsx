import { Navigate } from "react-router-dom";
import { mentorcontext } from "../../Mentorprovider";
import { Spinner } from "@material-tailwind/react";

const Privateroute = () => {
    const { user, loader } = useContext(mentorcontext)
    if (user) {
        return children;
    }
    if (loader){
        return <div className="flex gap-8">
      <Spinner color="blue" className="h-12 w-12" />
      
    </div>
    }
    return (
        <div>
            <Navigate to='/'></Navigate>
        </div>
    );
};

export default Privateroute;