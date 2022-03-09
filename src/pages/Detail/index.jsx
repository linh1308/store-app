import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fakestoreApi from '../../api/fakestoreApi';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { addToCart } from '../../features/productsSlice';
import './Detail.scss';

const Detail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		const getProductDetail = async () => {
			const response = await fakestoreApi.getDetail(id);
			setProduct(response);
		}

		getProductDetail();

	}, [id]);

	const handleAddCartClick = () => {
		dispatch(addToCart({...product, quantity: 1}));
	}

	return (
		<div className='product'>
			<div className="container">
				{product ? (
					<div className='product-detail'>
						<div className="product-detail__image">
							<img src={product.image} alt="" />
						</div>

						<div className="product-detail__content">
							<div className="category">{product.category}</div>
							<div className="title">{product.title}</div>
							<div className="desc">{product.description}</div>
							<div className="rating">Rating: {product.rating.rate}/5</div>
							<div className="price">{product.price}$</div>
							<Button onClick={handleAddCartClick}>ADD TO CART</Button>
						</div>
					</div>
				) : <Loading />}
			</div>
		</div>
	)
}

export default Detail;