import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useLoaderData } from 'react-router-dom';
import { MdOutlineVerified } from "react-icons/md";
import { Avatar } from "@material-tailwind/react";
import { useContext, useState } from 'react';
import { MentorContext } from '../../Mentorprovider';
import axios from 'axios';
const TutorDetails = () => {
    const { user } = useContext(MentorContext)
    const [error,seterror]=useState('')
    const [disabled, setdisabled] = useState(false)
    const tuitorial = useLoaderData()
    const loginemail = user.email;
    const { description, email, language, Type, name, price, review, url, _id } = tuitorial
    const handlebook = () => {
        console.log('gg')
        const tutorinformation = { _id, url, language, email, loginemail,name }
        console.log(tutorinformation)
        axios.post('https://mentor-mate-server-side.vercel.app/tutorinfo', tutorinformation)
            .then(data => {
                setdisabled(true)
                console.log(data.data)
            })
            .catch(err => {seterror('This one booked.try another')
                console.log(err)})
    }
    const [activeTab, setActiveTab] = useState("introduction"); 
    return (
        <div className="bg-gray-100 p-6  mt-24 lg:mt-28 flex flex-col lg:flex-row justify-between">
            <div>
                {/* Tutor Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center md:flex-row">
                    {/* Left Section: Tutor Info */}
                    <div className="flex flex-col md:flex-row md:w-3/4">
                        <img
                            src={url}
                            alt="Tutor"
                            className="rounded-lg w-32 h-32 md:w-40 md:h-40 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p className="text-sm text-gray-600">
                                Spreading knowledge everywhere that's all I do
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-yellow-500 font-bold">⭐ {review}/5.0</span>
                                <span className="text-gray-600">(4,448 reviews)</span>
                                <span className="text-green-500 font-bold">95% Job completion</span>
                            </div>
                            <p className="text-gray-600 mt-2">📍 Dhanmondi,Dhaka,Bangladesh</p>
                            <p className="text-blue-500 font-bold mt-2">Starting from: BDT{price}/hr</p>
                        </div>
                    </div>
                    {/* Right Section: Action Buttons */}
                    <div className="mt-4 h-1/3 md:mt-0 md:ml-auto flex justify-end items-end space-x-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
                            Let’s Talk Now
                        </button>
                        <button
                            onClick={handlebook}
                            disabled={disabled}
                            className={`mt-4 py-2 px-4 rounded-lg shadow-md text-white ${disabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            <Tippy
                                content={error}
                                visible={!!error} // Show tooltip only when there's an error
                                trigger="click" // Display tooltip on button click
                                placement="top"
                                theme="light"
                            >
                                <span>{disabled ? "Booked" : error ? "Booked" : "Book Me"}</span>
                            </Tippy>
                        </button>

                    </div>
                </div>

                
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            
            <div className="flex border-b border-gray-300">
                <button
                    className={`text-lg font-bold pb-2 border-b-2 ${
                        activeTab === "introduction" 
                            ? "text-yellow-500 border-yellow-500" 
                            : "text-gray-500 border-transparent"
                    }`}
                    onClick={() => setActiveTab("introduction")}
                >
                    Introduction
                </button>
                <button
                    className={`text-lg font-bold pb-2 ml-4 border-b-2 ${
                        activeTab === "reviews" 
                            ? "text-yellow-500 border-yellow-500" 
                            : "text-gray-500 border-transparent"
                    }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews
                </button>
            </div>

            
            <div className="mt-4">
                {activeTab === "introduction" ? (
                    
                    <>
                        <h3 className="text-lg font-bold">A brief introduction</h3>
                        <p className="text-gray-700 mt-2">{description}</p>
                        <ul className="mt-4 pl-5">
                            <li className="text-green-600">1. Aim to make students' lives better</li>
                            <li className="text-green-600">2. Shapes Students' Future</li>
                            <li className="text-green-600">3. Have Speciality in {language}</li>
                        </ul>
                    </>
                ) : (
                    
                    <p className="text-gray-500 mt-4">No reviews yet</p>
                )}
            </div>
        </div>
            </div>

            {/* Contact Info Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold">Contact Details</h3>
                <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                        📞 <span className="ml-2">0190*******</span>
                    </p>
                    <p className="flex items-center">
                        📧 <span className="ml-2">{email}</span>
                    </p>
                    <p className="flex items-center">
                        🌐 <span className="ml-2">{email}</span>
                    </p>
                </div>
                <button
                            onClick={handlebook}
                            disabled={disabled}
                            className={`mt-4 py-2 px-4 rounded-lg shadow-md text-white ${disabled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            <Tippy
                                content={error}
                                visible={!!error} // Show tooltip only when there's an error
                                trigger="click" // Display tooltip on button click
                                placement="top"
                                theme="light"
                            >
                                <span>{disabled ? "Booked" : error ? "Booked" : "Book Me"}</span>
                            </Tippy>
                        </button>

            </div>
        </div>
    );
};

export default TutorDetails;