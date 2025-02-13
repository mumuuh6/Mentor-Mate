import React from 'react';
import { Link } from 'react-router-dom'; // For navigation if you're using React Router

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-200 via-yellow-200 to-orange-200 py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-xl text-gray-700 mb-6">Something went wrong. We couldn't find the page you're looking for.</p>
                <p className="text-sm text-gray-500 mb-6">Please check the URL or go back to the homepage.</p>
                
                <Link to="/" className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
