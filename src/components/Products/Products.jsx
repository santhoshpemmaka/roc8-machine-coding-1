import React from "react";
import {useData} from "../../Context/ContextData";
import ProductItem from "./ProductItem";
import "./Products.scss";

const Products = () => {
	const {state, dispatch} = useData();
	return (
		<div className='product-container'>
			{state?.products?.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
