import React, { useState, useEffect } from 'react';
import HouseCard from './components/house-card/HouseCard.js'; // Import your HouseCard component
import './HouseList.scss';
// import HouseDetail from '../house-detail/HouseDetail.js'; // Import your HouseCard component


const HouseList = () => {
  const [houses, setHouses] = useState([]);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        return;
    }
    fetch(`http://localhost:5000/houses/user/${user.user_id}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved houses data to the component's state
        setHouses(data.data);
      })
      .catch((error) => {
        console.error('Error fetching houses:', error);
      });
  }, []);

  return (
    <div className="house-list">
      {houses.map((house) => (
        <HouseCard key={house.house.house_id} house_name={house.house.house_name} house_id={house.house.house_id} />
      ))}
    </div>
  );
};

export default HouseList;