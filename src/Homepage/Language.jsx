import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import axios from 'axios';

const Language = () => {
    
    
    return (
        <div className='max-w-7xl mx-auto px-3 mt-3 grid grid-cols-1  lg:grid-cols-3 gap-3'>
            {
                ['English',"Spanish","French","German","Turkish","Hindi"].map((data,index)=><div key={index} className=' shadow-lg border-2  border-black px-4 py-1 flex justify-between items-center'>
                    <GiTeacher className='size-6'></GiTeacher>
                    <div className='flex flex-col gap-1'>
                    <h3 className='text-xl font-bold'> {data} Tutors</h3>
                    <p className='text-sm font-light'> Wonderful Teachers</p>
                </div>
                <Link to={`/find-tutors/${data}`}><IoIosArrowForward className='size-5'></IoIosArrowForward></Link>
                </div>)
            }
        </div>
    );
};

export default Language;