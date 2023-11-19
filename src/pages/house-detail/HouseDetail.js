import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './HouseDetail.scss'
import HouseNavbar from './house-navbar/HouseNavBar';
import ProductCard from './product-card/ProductCard.js';


const HouseDetail = () => {
    const { id } = useParams(); // Get the house ID from the URL parameter
    const [house, setHouse] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/houses/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                setHouse(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching house details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <HouseNavbar house={house} />
            <div className='products-from-house'>
                {house.houseProduct.map((house_product) => (
                    <ProductCard key={house_product.house_product_id} product_info={house_product} />
                ))}
            </div>
        </div>
    );
};

export default HouseDetail;
