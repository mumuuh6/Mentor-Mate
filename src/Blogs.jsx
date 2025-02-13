import React from 'react';
import Lottie from "lottie-react";

// Array of blog objects with generated content
const blogs = [
    { 
        id: 1, 
        title: 'Top 5 Exercises to Improve Your Speed on the Field', 
        content: 'Improving your speed in sports is crucial for gaining an edge over your competition. Here are the top 5 exercises that can help you increase your speed: 1. Sprint drills to enhance acceleration. 2. Plyometric jumps to build explosive power. 3. Resistance band sprints for strength and speed. 4. Agility ladder drills to improve footwork. 5. Hill sprints for endurance and power.', 
        writer: 'John Doe' 
    },
    { 
        id: 2, 
        title: 'The Importance of Nutrition for Athletes', 
        content: 'What you eat is just as important as how you train. Proper nutrition helps athletes perform at their peak. Focus on a balanced diet that includes lean proteins, healthy fats, complex carbohydrates, and plenty of hydration. Avoid processed foods and make sure to refuel your body after training with the right balance of nutrients.', 
        writer: 'Jane Smith' 
    },
    { 
        id: 3, 
        title: 'How to Prevent Sports Injuries: Tips from Experts', 
        content: 'Injuries can derail your training and competition plans. Preventing them should be a priority for every athlete. Here are some expert tips: 1. Warm-up before every practice or game. 2. Cool down and stretch after every session. 3. Invest in proper footwear for your sport. 4. Cross-train to avoid overuse injuries. 5. Listen to your body and rest when needed.', 
        writer: 'Alex Johnson' 
    },
    { 
        id: 4, 
        title: 'Mental Toughness: How to Stay Focused During a Game', 
        content: 'Mental toughness is key to success in sports. Whether you’re playing a high-pressure game or recovering from a tough loss, staying focused can make a huge difference. Here are some strategies: 1. Visualize success and positive outcomes. 2. Stay calm under pressure through deep breathing. 3. Set realistic goals for improvement. 4. Build confidence through practice. 5. Keep a positive attitude, even when facing adversity.', 
        writer: 'Emily Davis' 
    },
    { 
        id: 5, 
        title: 'The Best Recovery Techniques for Athletes', 
        content: 'Recovery is just as important as training in sports. Without proper recovery, your body won’t perform at its best. Here are the best recovery techniques: 1. Get enough sleep to allow muscle repair. 2. Stay hydrated to prevent muscle cramps. 3. Use foam rollers to reduce muscle tightness. 4. Try active recovery like light jogging or swimming. 5. Incorporate massage or physical therapy for faster recovery.', 
        writer: 'Samuel Lee' 
    },
    { 
        id: 6, 
        title: 'Mental Toughness: How to Stay Focused During a Game', 
        content: 'Mental toughness is key to success in sports. Whether you’re playing a high-pressure game or recovering from a tough loss, staying focused can make a huge difference. Here are some strategies: 1. Visualize success and positive outcomes. 2. Stay calm under pressure through deep breathing. 3. Set realistic goals for improvement. 4. Build confidence through practice. 5. Keep a positive attitude, even when facing adversity.', 
        writer: 'Emily Davis' 
    },
];

const Blogs = () => {
    return (
        <div className="blogs-container  mt-24 lg:mt-28 max-w-6xl mx-auto p-6">
            <h1 className="font-bold text-3xl underline text-center mb-8 ">Our Latest Blogs</h1>
            
            <div className="bg-purple-100 p-6 blogs-list grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {blogs.map(blog => (
                    <div 
                        key={blog.id} 
                        className="blog-card bg-white shadow-lg rounded-lg border p-6 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-sm text-gray-600 mb-4"><strong>Written by:</strong> {blog.writer}</p>
                        <p className="text-gray-800">{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
