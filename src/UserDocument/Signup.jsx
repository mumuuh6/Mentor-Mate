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
import mentorAnimation from "../assets/mentor.json";
import Lottie from "lottie-react";

const Signup = () => {
    const { user, createUser, updateProfileData } = useContext(MentorContext);
    const nav = useNavigate();
    const [error, setError] = useState(""); // Correctly initialized useState

    const handlesignup = (e) => {
        e.preventDefault(); // Prevent default form submission
        const formdata = new FormData(e.target); // Create FormData from form
        const initialdata = Object.fromEntries(formdata.entries()); // Convert to object
        console.log(initialdata); // Log the form data
        const { name, ...newentry } = initialdata;
        console.log(newentry);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,30}$/;

        if (passwordRegex.test(newentry.password)) {
            createUser(newentry.email, newentry.password)
                .then((res) => {
                    const profile = { displayName: initialdata.name, photoURL: initialdata.url };
                    updateProfileData(profile)
                        .then(() => {
                            console.log("Profile updated");
                        })
                        .catch((error) => {
                            console.log("Error updating user profile:", error);
                        });

                    console.log(res.user);
                    e.target.reset();
                    nav("/");
                })
                .catch((err) => {
                    setError(err.message); // Set error message in state
                    console.log(err);
                });
        } else {
            setError("Password should contain uppercase, lowercase, a number, and a special character.");
            e.target.reset();
        }
    };

    return (
        <div className="flex justify-between">
            <div className="px-24 py-10">
                <Card color="transparent" shadow={false} className="shadow-2xl px-24 py-10 flex items-center">
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to register.
                    </Typography>
                    <form onSubmit={handlesignup} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                type="email"
                                name="email"
                                placeholder="name@mail.com"
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your PhotoLink
                            </Typography>
                            <Input
                                size="lg"
                                type="url"
                                name="url"
                                placeholder=""
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
                            name="terms"
                            containerProps={{ className: "-ml-2.5" }}
                        />

                        <Button className="mt-6" fullWidth type="submit">
                            Sign up
                        </Button>

                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to="/Login" className="font-medium text-gray-900">
                                Login Now!
                            </Link>
                        </Typography>

                        {/* Display error message */}
                        {error && (
                            <Typography color="red" className="mt-4 text-center">
                                {error}
                            </Typography>
                        )}
                    </form>
                </Card>
            </div>
            <div className="flex items-center">
                <Lottie animationData={mentorAnimation}></Lottie>
            </div>
        </div>
    );
};

export default Signup;
