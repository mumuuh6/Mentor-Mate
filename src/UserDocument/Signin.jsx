import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { MentorContext } from "../../Mentorprovider";
import { Link, useNavigate } from "react-router-dom";
import studentanimation from '../assets/student.json';
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
    const nav = useNavigate();
    const { user, loginUser, googleSignIn } = useContext(MentorContext);
    const [error, setError] = useState(''); // State for error message

    const handlelogin = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const initially = Object.fromEntries(formdata.entries());
        console.log(initially);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,30}$/;

        if (passwordRegex.test(initially.password)) {
            loginUser(initially.email, initially.password)
                .then(res => {
                    console.log(res.user, user);
                    e.target.reset();
                    nav('/');
                })
                .catch(err => {
                    e.target.reset()
                    // Handle the error and show the error message from err.message
                    setError(err.message);
                    console.log(err.message);
                });
        } else {
            setError("Password must contain uppercase, lowercase, a number, and a special character.");
            e.target.reset();
        }
    };

    return (
        <div className="flex justify-between">
            <div>
                <Card color="transparent" shadow={false} className="px-24 py-10 flex items-center shadow-xl">
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you again! Enter your details to make your future.
                    </Typography>
                    <form onSubmit={handlelogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                name="email"
                                type="email"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                name="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree to the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-6 py-4" fullWidth type="submit">
                            Login
                        </Button>
                        {error && (
                            <Typography color="red" className="mt-4 text-center font-normal">
                                {error}
                            </Typography>
                        )}
                    </form>
                    
                    <Button className="mt-6 flex items-center justify-center" fullWidth type="submit">
                            <FcGoogle className="size-1/12"></FcGoogle>
                    </Button>
                    
                    <p>Already Have an Account?<Link to='/Signup' className="underline">Create Now!</Link></p>
                    
                </Card>
            </div>
            <div className="flex items-center">
                <Lottie animationData={studentanimation}></Lottie>
            </div>
        </div>
    );
};

export default Signin;
