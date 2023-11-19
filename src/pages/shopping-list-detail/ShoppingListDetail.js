import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './ShoppingListDetail.scss';
// import HouseDetail from '../house-detail/HouseDetail.js'; // Import your HouseCard component


const ShoppingListDetail = () => {
    const { detailId } = useParams();
    const [shoppingListData, setShoppingListData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/shopping-list/${detailId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setShoppingListData(data)
            })
            .catch((error) => {
                console.error('Error fetching houses:', error);
            });
    }, [detailId]);


    function handleSubmit(){
        
    }

    return (
        <div className="shopping-list-product-list">
            <h2>Shopping List Items</h2>
            <ul className='shopping-product-list'>
                {shoppingListData.products?.map(item => (
                    <li key={item.house_product_id} className='shopping-list-product'>
                        <p>QUANTITY: {item.quantity}</p>
                        <p>QUANTITY IN STOCK: {item.houseProduct.quantity_in_stock}</p>
                        <p>PRODUCT NAME: {item.houseProduct.product.category}</p>
                        <p>CATEGORY: {item.houseProduct.product.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingListDetail;