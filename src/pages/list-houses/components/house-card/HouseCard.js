import React from 'react';
import './HouseCard.scss'

const House = ({ house_id, house_name }) => {
  return (
    <div className='house-card-container'>
        <a href={`/house/${house_id}`} className='house-card'>
            <h2 className='title'>
                {house_name}
            </h2>
        </a>
    </div>
  );
};

export default House;
