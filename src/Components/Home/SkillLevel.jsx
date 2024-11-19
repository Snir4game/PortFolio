import React from 'react';

const SkillLevel = ({level}) =>{
    const maxBars = 5;
    const filledBars = Math.floor((level/100) * maxBars);

    return(
        <div className="flex items-center gap-1">
            {[...Array(maxBars)].map((_, index) => (
                <div key={index}
                className={`h-4 w-8 rounded transition-all duration-300 
                    ${
                        index < filledBars
                        ? "bg-blue-500" 
                        : "bg-gray-200"
                    }`}
                />
            ))}
            <span className="ml-2 text-sm text-gray-500">{level}%</span>
        </div>
    )
}

export default SkillLevel;



