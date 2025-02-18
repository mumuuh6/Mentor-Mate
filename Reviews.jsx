import React from 'react';
import { Fade } from 'react-awesome-reveal';

// Array of user reviews
const reviews = [
    { 
        id: 1, 
        rating: 4, 
        review: 'This sports equipment has really helped improve my performance. I noticed a big difference in my strength and endurance.', 
        user: 'John Doe' 
    },
    { 
        id: 2, 
        rating: 5, 
        review: 'The quality of the products is amazing. Definitely worth the investment! I feel more confident during my workouts.', 
        user: 'Jane Smith' 
    },
    { 
        id: 3, 
        rating: 3, 
        review: 'It’s a good product, but the fit wasn’t exactly what I expected. Overall, it’s decent for the price.', 
        user: 'Alex Johnson' 
    },
    { 
        id: 4, 
        rating: 5, 
        review: 'Absolutely love it! My training sessions have become more effective and enjoyable. Highly recommend!', 
        user: 'Emily Davis' 
    },
    { 
        id: 5, 
        rating: 2, 
        review: 'The quality didn’t meet my expectations. It could be improved. Not bad, but I wouldn’t purchase again.', 
        user: 'Samuel Lee' 
    },
    
];



const Reviews = () => {
    return (
        <div className="mt-6 font-sans max-w-7xl mx-auto">
            <Fade direction='down' duration={1000}><h1 className="text-3xl text-center  mb-8">User Reviews</h1></Fade>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {reviews.map(review => (
                    
                        <div key={review.id} className=" p-6 rounded-lg shadow-lg transition-transform transform hover:translate-y-2 flex flex-col items-center ">
                        <h3 className="text-xl font-semibold  mb-4">{review.user}</h3>
                        <div className="flex mb-4 justify-center">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`text-xl ${index < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                            ))}
                        </div>
                        <Fade direction='up' duration={1000} ><p className="">{review.review}</p></Fade>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Reviews;
