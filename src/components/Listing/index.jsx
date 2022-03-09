import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakestoreApi from '../../api/fakestoreApi';
import Loading from '../../components/Loading';
import Button from '../Button';
import './Listing.scss';

const Listing = () => {
    const [products, setProducts] = useState([]);
    const btnList = ["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"];
    const navigate = useNavigate();
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllProducts = async () => {
            setLoading(true);
            const response = await fakestoreApi.getAllProducts();
            setProducts(response);
            setFilter(response);
            setLoading(false);
        }
        
        getAllProducts();
    }, [])

    const handleFilterClick = (btn) => {
        if (btn === 'All') {
            setFilter(products);
        } else {
            const productsFilter = products.filter(product => product.category === btn.toLowerCase());
            setFilter(productsFilter);
        }
    }

    return (
        <div className='products'>
            <div className="container">
                <div className="products__title">
                    Latest products
                </div>

                <div className="btns">
                    {btnList.map((btn, index) => {
                        return (
                            <Button className='btn--regular m5' key={index} onClick={() => handleFilterClick(btn)}>
                                {btn}
                            </Button>
                        );
                    })}
                </div>

                <div className="products__list">
                    {loading ? <Loading /> : filter.map((product) => {
                        return (
                            <div className="product-card" key={product.id}>
                                <div className="product-card__image">
                                    <img src={product.image} alt="" />
                                </div>

                                <div className="product-card__content">
                                    <div className="title">{product.title}</div>
                                    <div className="price">{product.price}$</div>
                                    <Button className='btn--regular'
                                            onClick={() => navigate('/products/' + product.id)}
                                    >
                                        See detail
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Listing;