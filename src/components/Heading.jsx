import React from 'react';

const Heading = ({ title, subTitle }) => {
    return (
        <div className='text-center'>
            <h1 className='my-5 text-5xl font-thin'>{title}</h1>
            <p className='mb-10 font-thin text-xl'>{subTitle}</p>
        </div>
    );
};

export default Heading;