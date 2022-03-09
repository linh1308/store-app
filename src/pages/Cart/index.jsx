import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import './Cart.scss';
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '../../features/productsSlice';

const Cart = () => {
    const productInCart = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleDeleteProductClick = (id) => {
        dispatch(deleteFromCart(id))
    }

    const handleIncreaseQuantityClick = (id) => {
        dispatch(increaseQuantity(id));
    }

    const handleDecreaseQuantityClick = (id) => {
        dispatch(decreaseQuantity(id));
    }

    return (
        <div className='cart'>
            <div className="container">
                <div className="cart-title">Your Cart</div>
                <div className="cart-list">
                    {productInCart.map((product) => {
                        return (
                            <div className="cart-item" key={product.id}>
                                <div className="cart-item__image">
                                    <img src={product.image} alt="" />
                                </div>

                                <div className="cart-item__content">
                                    <div className="title">{product.title}</div>
                                    <div className="price">{product.price}$</div>
                                    <div className="quantity">
                                        <FaMinus className='icon' onClick={() => handleDecreaseQuantityClick(product.id)} />
                                        {product.quantity}
                                        <FaPlus className='icon' onClick={() => handleIncreaseQuantityClick(product.id)} />
                                    </div>
                                </div>

                                <FaTimes className='remove' onClick={() => handleDeleteProductClick(product.id)} />
                            </div>
                        )
                    })}
                </div>

                <div className="cart-purchase">
                    <div className="total">
                        Total Purchase: {productInCart.reduce((x, y) => {
                            return x += y.quantity * y.price;
                        }, 0)}$
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;