import React from 'react';
import ContainerX from './ContainerX';

const Spinner = () => {
    return (
        <ContainerX className={'h-[50vh] w-screen flex flex-col items-center justify-center'}>
            <span className="loading loading-bars loading-xl"></span>
        </ContainerX>
    );
};

export default Spinner;