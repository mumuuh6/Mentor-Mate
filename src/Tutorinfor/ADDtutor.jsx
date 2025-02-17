import React, { useContext } from 'react';
import { MentorContext } from '../../Mentorprovider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ADDtutor = () => {
    const {user}=useContext(MentorContext)
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const formdata = new FormData(e.target); // Create FormData from form
        const initialdata = Object.fromEntries(formdata.entries()); // Convert to object
    
        console.log(initialdata);
    
        // Ensure review is treated as an integer
        const intreview = parseInt(initialdata.review, 10); // Parse as integer
        const intprice = parseInt(initialdata.price, 10); // Parse as integer
        const { review,price, ...newInitialData } = initialdata; // Remove review from initial data
        const permanentData = { ...newInitialData, review: intreview,price:intprice}; // Add the parsed integer value
    
        console.log(permanentData);
    
        // Send the data to the backend
        axios.post('https://mentor-mate-server-side.vercel.app/tutor', permanentData)
            .then(res => { 
                Swal.fire({
                title: "Good job!",
                text: "Your subscription as teacher is done!",
                icon: "success"
              }); })
            .catch(err => { console.log(err); });
            e.target.reset()
    };
    
    return (
        <div className="flex justify-center items-center min-h-screen  mt-24 px-4 lg:mt-28 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 py-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4 text-center text-blue-700">Tutor Registration Form</h2>

                {/* Name */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Name (Logged in user)</label>
                <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    readOnly
                    required
                />

                {/* Email */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Email (Logged in user)</label>
                <input
                    type="email"
                    name="email"
                    readOnly
                    placeholder="Your email"
                    defaultValue={user?.email}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />

                {/* Image URL */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Image URL</label>
                <input
                    type="url"
                    name="url"
                    
                    placeholder="Enter image URL"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                />

                {/* Language Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Language</label>
                <select
                    name="language"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Turkish">Turkish</option>
                    
                </select>
                {/* Teacher Specialty Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Teacher Type</label>
                <select
                    name="Type"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                >
                    <option value="">Select </option>
                    <option value="Super tutor">Super tutor</option>
                    <option value="Good Tutor">Good Tutor</option>
                    <option value="New Tutor">New Tutor</option>

                    
                </select>

                {/* Price */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Price</label>
                <input
                    type="number"
                    name="price"
                    
                    placeholder="Enter price"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />

                {/* Description */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                <textarea
                    name="description"
                    
                    placeholder="Describe your tutorial"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />

                {/* Review */}
                <label className="block mb-2 text-sm font-medium text-gray-600">Review (Default 0)</label>
                <input
                    type="number"
                    name="review"
                    
                    defaultValue='0'
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-gray-100"
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ADDtutor;