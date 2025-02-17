import React, { useContext, useEffect, useState } from 'react';
import { MentorContext } from '../../Mentorprovider';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Dialog,
    Input,
    Typography,
    CardFooter,
    Spinner,
} from "@material-tailwind/react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdOutlineVerified, MdOutlinePlayLesson } from "react-icons/md";

const Mytutorials = () => {
    const { user, userSignOut } = useContext(MentorContext);
    const emailofbooking = user.email;
    const [mytutorial, setmytutorial] = useState([]);
    const [deleted, setdeleted] = useState(false);
    const [open, setOpen] = useState(false); // State for controlling dialog visibility
    const [editData, setEditData] = useState(null); // State to store data for editing
    const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
    const [loading, setLoading] = useState(true); // New state for loading

    // Show loading spinner for first 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    // Fetch tutorials whenever the `deleted` state changes
    useEffect(() => {
        axios
            .get(`https://mentor-mate-server-side.vercel.app/mytutorialinfo?email=${emailofbooking}`, { withCredentials: true })
            .then((data) => {
                setmytutorial(data.data);
                setErrorMessage(""); // Clear error message on successful fetch
            })
            .catch((err) => {
                userSignOut()
                    .then(res => console.log(res));
                console.error(err.message);
                setErrorMessage("Failed to fetch tutorials. Please try again.");
            });

        setdeleted(false); // Reset the `deleted` state after fetching new data
    }, [deleted]);

    const handledelete = (_id) => {
        axios
            .delete(`https://mentor-mate-server-side.vercel.app/tutor/${_id}`)
            .then((res) => {
                setdeleted(true); // Trigger the re-fetch of data
                setErrorMessage(""); // Clear any previous errors
                console.log(res.data);
            })
            .catch((err) => {
                console.error("Error deleting tutorial:", err);
                setErrorMessage("Failed to delete the tutorial. Please try again."); // Set error message
            });
    };

    const handleOpen = (data) => {
        setEditData(data); // Set data to edit in the modal
        setOpen(true); // Open the dialog when needed
    };

    const handleClose = () => {
        setOpen(false); // Close the dialog manually
    };

    const handleUpdate = (e, id) => {
        e.preventDefault(); // Prevent form submission
        const formdata = new FormData(e.target); // Create FormData from form
        const updatedData = Object.fromEntries(formdata.entries()); // Convert to object

        axios
            .put(`https://mentor-mate-server-side.vercel.app/tutoration/${id}`, {
                name: updatedData.name,
                email: updatedData.email,
                language: updatedData.language,
                price: updatedData.price,
                description: updatedData.description,
                review: updatedData.review,
            })
            .then((res) => {
                console.log(res.data);
                setdeleted(true); // Trigger a re-fetch of the data
                setErrorMessage(""); // Clear any previous errors
                setOpen(false); // Close the dialog after a successful update
            })
            .catch((err) => {
                console.error("Error updating tutorial:", err);
                setErrorMessage("Failed to update the tutorial. Please try again."); // Set error message
            });
    };
    if (loading) {
        return (
            <div className="flex justify-center items-center gap-8 h-screen w-full">
                <Spinner color="blue" className="h-12 w-12" />
            </div>
        );
    }
    return (
        <div className=" flex flex-col gap-4 justify-center items-center py-4  mt-24 lg:mt-28">
            {errorMessage && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                    <p>{errorMessage}</p>
                </div>
            )}
            {mytutorial.map((data) => (
                <div key={data._id} className="max-w-sm md:max-w-none flex flex-col justify-center items-center gap-3">
                    <Card className="w-full max-w-[48rem] h-auto flex flex-col items-center justify-center md:flex-row lg:flex-row">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none "
                        >
                            <img
                                src={data.url}
                                alt="Tutor"
                                className="h-full w-full object-fit"
                            />
                        </CardHeader>
                        <CardBody className="flex justify-between items-center flex-row lg:flex-row md:flex-row text-start w-screen">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <h3>{data.name}</h3>
                                    <MdOutlineVerified className="text-blue-900" />
                                </div>
                                <div className="bg-purple-200 text-purple-900 w-24 rounded-lg text-start pl-1">
                                    {data.description}
                                </div>
                                <div className="flex flex-col">
                                    <p className="flex items-center gap-1">
                                        <PiStudent className="text-black" /> 24 Active Students.
                                    </p>
                                    <p className="flex items-center">
                                        <MdOutlinePlayLesson className="text-black" /> 2712 lessons
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <FaAmericanSignLanguageInterpreting className="text-black" />
                                    <p>Speaks {data.language} proficiently</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h3>
                                        Star: <p>{data.review}</p>
                                    </h3>
                                    <h3>BDT {data.price}</h3>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleOpen(data)} // Pass the data to the modal
                                        className="p-3 border-2 rounded-lg bg-purple-500 text-white text-md font-bold"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handledelete(data._id)}
                                        className="p-3 border-2 rounded-lg bg-purple-500 text-white text-md font-bold"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Dialog for Update */}
                    <Dialog
                        size="xxl"
                        open={open}
                        className="bg-transparent shadow-none max-w-xs mx-auto"
                    >
                        <form onSubmit={(e) => handleUpdate(e, data._id)}>
                            <Card className="mx-auto w-full">
                                <CardBody className="w-full flex flex-col gap-4 p-4">
                                    <Typography variant="h4" color="blue-gray">
                                        Update the necessities
                                    </Typography>
                                    <Typography
                                        className="mb-3 font-normal"
                                        variant="paragraph"
                                        color="gray"
                                    >
                                        Enter your required field.
                                    </Typography>

                                    <div className="grid grid-cols-2 justify-between gap-4">
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Name
                                            </Typography>
                                            <Input
                                                label="Name"
                                                size="lg"
                                                name="name"
                                                className='w-24'
                                                defaultValue={data.name}
                                                readOnly
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Email
                                            </Typography>
                                            <Input
                                                label="Email"
                                                size="lg"
                                                
                                                name="email"
                                                defaultValue={data.email}
                                                readOnly
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Language
                                            </Typography>
                                            <Input
                                                label="Language"
                                                size="lg"
                                                name="language"
                                                required
                                                defaultValue={data.language}
                                            />
                                        </div>
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Price
                                            </Typography>
                                            <Input
                                                label="Price"
                                                size="lg"
                                                name="price"
                                                required
                                                defaultValue={data.price}
                                            />
                                        </div>
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Description
                                            </Typography>
                                            <Input
                                                label="Description"
                                                size="lg"
                                                name="description"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Typography className="mb-2" variant="h6">
                                                Review
                                            </Typography>
                                            <Input
                                                label="Review"
                                                size="lg"
                                                required
                                                name="review"
                                                defaultValue={data.review}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter className="pt-0 ">
                                    <Button variant="gradient" type="submit" className='mb-2' fullWidth>
                                        Update
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={handleClose}
                                        fullWidth
                                    >
                                        Close
                                    </Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </Dialog>
                </div>
            ))}
        </div>
    );
};

export default Mytutorials;
