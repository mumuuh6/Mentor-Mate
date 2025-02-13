import React, { useContext } from 'react';
import { MentorContext } from '../Mentorprovider';

const UseTheme = () => {
    const context=useContext(MentorContext)
    return context;
};

export default UseTheme;