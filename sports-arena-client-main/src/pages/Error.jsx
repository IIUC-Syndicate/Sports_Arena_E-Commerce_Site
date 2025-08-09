import React from 'react';
import ContainerX from '../components/shared/ContainerX';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/error.json';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <>
            <ContainerX className={'h-screen w-screen flex flex-col items-center justify-center'}>
                <Lottie animationData={errorAnimation} className="hidden md:block"></Lottie>
                <div>
                    <Link to={'/'} className='btn btn-accent'>Home</Link>
                </div>
            </ContainerX>
        </>
    );
};

export default Error;