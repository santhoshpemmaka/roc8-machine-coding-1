import React from "react";
import {useData} from "../../Context/ContextData";
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
	const {state, dispatch} = useData();
	let proudctIncart = -1;

	const cartHandler = (product) => {
		product.count = 1;
		dispatch({type: "ADDCART", payload: product});
	};

	proudctIncart = state?.inCart?.findIndex(
		(productItem) => productItem.id === product.id
	);

	return (
		<div className='product-listing-card'>
			<div className='product-listing-image'>
				<img
					className='product-responsive-image'
					src={product.image}
					alt='product-image'
				/>
			</div>
			<div className='product-listing-description'>
				<h4>
					{product.name} by {product.brand}
				</h4>
				<p>{product.DESC}</p>
				<div className='product-listing-display-price'>
					<span className='product-listing-price discount-price'>
						Rs. {product.discountCost}
					</span>
					<span className='product-listing-price actual-price'>
						Rs. {product.actualCost}
					</span>
				</div>
				{proudctIncart > -1 ? (
					<Link to='/cartitems' style={{textDecoration: "none"}}>
						<button className='addCart'>Go To Cart</button>
					</Link>
				) : (
					<button className='addCart' onClick={() => cartHandler(product)}>
						Add Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductItem;
