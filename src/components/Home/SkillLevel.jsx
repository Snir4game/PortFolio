import React from 'react';

const SkillLevel = ({ level }) => {
    // Calculate how many bars should be filled
    const filledBars = Math.floor(level / 20);
    
    // Create array of 5 bars
    const bars = [...Array(5)].map((_, index) => {
        const isFilled = index < filledBars;
        const isPartiallyFilled = index === filledBars && level % 20 > 0;
        const partialWidth = isPartiallyFilled ? (level % 20) * 5 : 100;
        
        return (
            <div 
                key={index} 
                className="progress" 
                style={{ 
                    height: '15px', 
                    width: '38px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '2px',
                    margin: '2px'
                }}
            >
                <div 
                    className="progress-bar"
                    role="progressbar"
                    style={{ 
                        width: isFilled ? '100%' : (isPartiallyFilled ? `${partialWidth}%` : '0%'),
                        backgroundColor: '#0466C8',
                        transition: 'width 0.5s ease-in-out'
                    }}
                    aria-valuenow={isFilled ? 100 : (isPartiallyFilled ? partialWidth : 0)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
        );
    });

    return (
        <div className="d-flex align-items-center">
            {bars}
        </div>
    );
};

export default SkillLevel;
