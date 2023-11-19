import React from 'react';
import './Home.scss'; // Import the Home.scss file

const Home = () => {
  return (
    <div className="container">
      {/* Home Page Content */}
        <h1 className='text'>Welcome to Home Stock Management</h1>
        <p className='text'>
          This app is beeing developed to help you have a better management of your house or houses inventory, such as products you have stored, or the consume on a daily bases
        </p>
    </div>
  );
};

export default Home;