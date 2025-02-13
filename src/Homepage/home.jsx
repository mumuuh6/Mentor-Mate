import React from 'react';
import Carosel from './Carosel';
import Counup from './Counup';
import Language from './Language';
import Blogs from '../Blogs';
import Reviews from '../../Reviews';

const Home = () => {
    return (
        <div className='mt-24 lg:mt-28'>
            
                <div >
                    <Carosel></Carosel>
                </div>
                <div>
                    <Counup></Counup>
                </div>
                <div className=''>
                    <Language></Language>
                </div>
                <div>
                    <Blogs></Blogs>
                </div>
                <div>
                    <Reviews></Reviews>
                </div>
            
        </div>
    );
};

export default Home;