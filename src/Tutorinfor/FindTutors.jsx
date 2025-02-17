import axios from "axios";
import { useEffect, useState } from "react";
import Eachtutor from "./Eachtutor";

const FindTutors = () => {
    const [tutor, setTutor] = useState([]);
    const [sort, setsort] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get(`https://mentor-mate-server-side.vercel.app/tutor?sort=${sort}`)
            .then(data => { 
                setTutor(data.data) })
            .catch(err => setError('Error fetching data.'));
    }, [sort]);
    
    // Filter tutors based on the search text matching the language
    const filteredTutors = tutor.filter(tuition => 
        tuition.language.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-4 grid items-center justify-center gap-6 mt-24 lg:mt-28">
            <div className="flex justify-between">
            <div className="w-full mb-6  px-4 flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Search by language"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
            </div>
            <div className="w-full mb-6  px-4 flex gap-1 items-center justify-center">
                
                <button onClick={()=>setsort(!sort)} className="bg-purple-400 p-3 rounded-lg">Sort by price</button>
            </div>
            
            </div>
            {
                filteredTutors.length > 0 ? (
                    filteredTutors.map(tuition => <Eachtutor key={tuition._id} tuition={tuition} />)
                ) : (
                    <p>No tutors found for this language!</p>
                )
            }
        </div>
    );
};

export default FindTutors;
