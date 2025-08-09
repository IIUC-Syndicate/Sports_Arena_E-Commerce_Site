import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const SportsCategory = () => {
    const sports = [
        {
            "name": "Football (Soccer)",
            "description": "A global sport involving teamwork, strategy, and scoring goals to win."
        },
        {
            "name": "Basketball",
            "description": "A fast-paced game where players score by shooting hoops."
        },
        {
            "name": "Tennis",
            "description": "A competitive sport played by hitting a ball over a net."
        },
        {
            "name": "Cricket",
            "description": "A bat-and-ball game emphasizing strategy, skill, and teamwork."
        },
        {
            "name": "Swimming",
            "description": "A water-based sport requiring strength, endurance, and speed to excel."
        },
        {
            "name": "Badminton",
            "description": "A racquet sport where players score by hitting a shuttlecock."
        }
    ]
    
    return (
        <div>
            <SectionTitle>Sports Categories</SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10'>
                {
                    sports.map((sport, index) =>
                        <div key={index} className='grid justify-center text-center border-2 rounded-xl p-10 cursor-pointer hover:bg-accent border-gray-800 transition-all duration-500'>
                            <h1 className='text-gray-900 text-2xl font-bold'>{sport.name}</h1>
                            <p className='text-gray-700 '>{sport.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SportsCategory;