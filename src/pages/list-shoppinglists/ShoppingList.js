import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ShoppingList.scss';
// import HouseDetail from '../house-detail/HouseDetail.js'; // Import your HouseCard component


const ListShoppingLists = () => {
    const { id } = useParams();
    const [shoppingListData, setShoppingListData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/shopping-list/house/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setShoppingListData(data)
            })
            .catch((error) => {
                console.error('Error fetching houses:', error);
            });
    }, [id]);

    return (
        <div className="house-list">
            <h2>Shopping List Items</h2>
            <ul>
                {shoppingListData.shopping_list?.map(item => (
                    <li key={item.shopping_list_id} className='shopping-list-info'>
                        <a href={`/house/${id}/detail/${item.shopping_list_id}`}>
                            <p>House ID: {item.house_id}</p>
                            <p>Is Custom: {item.is_custom ? 'Yes' : 'No'}</p>
                            <p>Is Complete: {item.is_complete ? 'Yes' : 'No'}</p>
                            <p>Is Active: {item.is_active ? 'Yes' : 'No'}</p>
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default ListShoppingLists;