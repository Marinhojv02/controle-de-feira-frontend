import React from 'react';
import './HouseNavBar.scss'

const HouseNavbar = ({house}) => {
    const generateShoppingList = async (e) => {
        let is_custom=false; 
        let is_complete=false;
        console.log(JSON.stringify({house_id:house.house_id, is_custom:is_custom, is_complete:is_complete}))
        try {
            const response = await fetch('http://localhost:5000/shopping_list/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({house_id:house.house_id, is_custom:is_custom, is_complete:is_complete}),
            });
            if (response.ok) {
                console.log('Product created successfully');
            } else {
                console.log('Product creation failed. Please check the form data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='house-details-navbar'>
            <div className='house-info'>
                <p className='text'>{house.house_name}</p>
                <p className='text'>ID: {house.house_id}</p>

            </div>
            <div className='user-actions-house'>
                <a className='link' href={`/house/${house.house_id}/add-product`}>
                    Add product
                </a>
                <span> | </span>
                <a className='link' href={`/house/${house.house_id}/add-people`}>
                    Add people
                </a>
                <span> | </span>
                <button className='link astext' onClick={generateShoppingList}>
                    Generate shopping list
                </button>
                <span> | </span>
                <a className='link' href={`/house/${house.house_id}/view-shopping-lists`}>
                    View shopping lists
                </a>
            </div>
        </div>
    );
};

export default HouseNavbar;
