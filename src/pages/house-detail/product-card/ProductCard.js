import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product_info }) => {
    return (
        <div className='product-card'>
            <div className='product-info'>
                <div>
                    name: {product_info.product.product_name}
                </div>
                <div>
                    category: {product_info.product.category}
                </div>
            </div>
            <div className='product-quantity-info'>
                <div>quantity in stock: {product_info.quantity_in_stock}</div>
                <div>recommended quantity: {product_info.recommended_quantity}</div>
                <div>reorder point: {product_info.reorder_point}</div>
            </div>
        </div>
    );
};

export default ProductCard;
