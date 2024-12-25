import axios from "axios";
import { useEffect, useState } from "react";
import Eachtutor from "./Eachtutor";

const FindTutors = () => {
    const [tutor,settutor]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/tutor')
        .then(data=>{settutor(data.data)})
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="grid justify-center items-center gap-6">
            {
                tutor.map(tuition=><Eachtutor key={tuition._id} tuition={tuition}></Eachtutor>)
            }
        </div>
    );
};

export default FindTutors;