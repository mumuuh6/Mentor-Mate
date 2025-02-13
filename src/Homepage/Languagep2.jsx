import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { MdOutlineVerified, MdOutlinePlayLesson } from "react-icons/md";
import { Link } from "react-router-dom";

const Languagep2 = () => {
    const language = useLoaderData();
    
    return (
        <div className="grid justify-center items-center gap-6">
            {language.length > 0 ? (
                language.map(tuition => (
                    <div key={tuition._id}>
                        <Card className="w-full max-w-[48rem] h-auto sm:h-[auto] flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={tuition.url || "default-image-url"} // Default image if no URL
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="flex justify-between items-center text-start w-screen">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <h3>{tuition.name}</h3>
                                        <p><MdOutlineVerified className="text-blue-900" /></p>
                                    </div>
                                    <div className="bg-purple-200 text-purple-900 w-24 rounded-lg text-start pl-1">{tuition.Type}</div>
                                    <div className="flex flex-col">
                                        <p className="flex items-center gap-1">
                                            <PiStudent className="text-black" /> 24 Active Students
                                        </p>
                                        <p className="flex items-center">
                                            <MdOutlinePlayLesson className="text-black" /> 2712 lessons
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p><FaAmericanSignLanguageInterpreting className="text-black" /></p>
                                        <p>Speaks {tuition.language} proficiently</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <h3>Star Rating: <p>{tuition.review}</p></h3>
                                        <h3>BDT {tuition.price}</h3>
                                    </div>
                                    <div>
                                        <Link to={`/tutor/${tuition._id}`} className="p-3 border-2 rounded-lg bg-purple-500 text-black text-md font-bold">
                                            Book trial lesson
                                        </Link>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))
            ) : (
                <p>No Tutor available right now!</p>
            )}
        </div>
    );
};

export default Languagep2;
