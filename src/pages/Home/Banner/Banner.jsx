import React from 'react';
import bannar from '../../../../public/Banner_React-Native-1.png';

const Banner = () => {
    return (
        <div className="text-3xl font-bold underline">
             <div className='w-100'>
                <img className='w-full' src={bannar} alt="" />
             </div>
        </div>
    );
};

export default Banner;