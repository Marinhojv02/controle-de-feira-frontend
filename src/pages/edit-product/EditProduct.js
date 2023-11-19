import React, { useState } from 'react';
import { useParams } from 'react-router';
import './AddProduct.scss'; // You can create a separate SCSS file for styling

const AddProduct = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({
        product_name: '',
        category: '',
        quantity_in_stock: 0,
        reorder_point: 0,
        recommended_quantity: 0,
        house_id: id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Ensure that quantity_in_stock and reorder_point are converted to numbers
        if (name === 'quantity_in_stock' || name === 'reorder_point' || name === 'recommended_quantity') {
            setProductInfo({
                ...productInfo,
                [name]: Number(value), // Convert to number
            });
        } else {
            setProductInfo({
                ...productInfo,
                [name]: value,
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the product data to your server for creation
        // Parse the specific fields to numbers
        const parsedQuantity = parseFloat(productInfo.quantity_in_stock);
        const parsedReorder = parseFloat(productInfo.reorder_point);
        const parsedRecommended = parseFloat(productInfo.recommended_quantity);
        const parsedHouseId = parseFloat(productInfo.house_id);

        if (isNaN(parsedQuantity) || isNaN(parsedReorder) || isNaN(parsedRecommended) || isNaN(parsedHouseId)) {
            console.error('Invalid number format for one or more fields');
            return;
        }

        // Update the productInfo object with the parsed values
        setProductInfo({
            ...productInfo,
            quantity_in_stock: parsedQuantity,
            reorder_point: parsedReorder,
            recommended_quantity: parsedRecommended,
            house_id: parsedHouseId,
        });
        try {
            const response = await fetch('http://localhost:5000/product/register-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productInfo),
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
        <div className='centered-create-product-container'>
            <div className='container'>
                <div>
                    <div>
                        <h2 className='text'>Create Product</h2>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='product-info'>
                                <label htmlFor="product_name" className='text'>Product Name</label>
                                <input
                                    type="text"
                                    id="product_name"
                                    name="product_name"
                                    value={productInfo.product_name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='product-info'>
                                <label htmlFor="category" className='text'>Category</label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={productInfo.category}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='product-info'>
                                <label htmlFor="quantity_in_stock" className='text'>Quantity in Stock</label>
                                <input
                                    type="number"
                                    id="quantity_in_stock"
                                    name="quantity_in_stock"
                                    value={productInfo.quantity_in_stock}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='product-info'>
                                <label htmlFor="reorder_point" className='text'>Reorder Point</label>
                                <input
                                    type="number"
                                    id="reorder_point"
                                    name="reorder_point"
                                    value={productInfo.reorder_point}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='product-info'>
                                <label htmlFor="recommended_quantity" className='text'>Recommended Quantity</label>
                                <input
                                    type="number"
                                    id="recommended_quantity"
                                    name="recommended_quantity"
                                    value={productInfo.recommended_quantity}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className='submit'>
                                Create Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
