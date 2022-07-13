import React from "react";
import {useData} from "../../Context/ContextData";
import CartitemProduct from "./CartitemProduct";
import "./CartItems.scss";
import {totalPrice, discountPrice} from "./amountCalculation";

const CartItems = () => {
	const {state, dispatch} = useData();
	const TotalMRP = totalPrice(state);
	const discount = discountPrice(state);

	return (
		<div>
			<div className='cartitem-container'>
				<h1>
					My Cart
					<span>{state.inCart.length} items</span>
				</h1>
				<div className='cartitem-component'>
					<div className='cartitem-items'>
						{state.inCart.length > 0 &&
							state.inCart.map((itemProduct) => (
								<CartitemProduct product={itemProduct} key={itemProduct.id} />
							))}
					</div>
					{state.inCart.length > 0 ? (
						<div className='cartitem-display-cost'>
							<label className='cartitem-cost-heading'>PRICE DETAILS</label>
							<div className='cartitem-cost-detail'>
								<span>Total MRP</span>
								<span>Rs.{TotalMRP}</span>
							</div>
							<div className='cartitem-cost-detail'>
								<span>Discount on MRP</span>
								<span className='card-cost-discount'>- Rs. {discount}</span>
							</div>
							<div className='cartitem-cost-detail'>
								<span>Convenience Fee</span>
								<span className='card-cost-discount'>
									<span> Rs. 99 </span>Free{" "}
								</span>
							</div>
							<div className='cartitem-cost-total'>
								<span>Total Amount</span>
								<span>Rs. {TotalMRP - discount}</span>
							</div>
							<button
								className='cartitem-order-btn'
								// onClick={() => placeOrderHandler()}
							>
								PLACE ORDER
							</button>
						</div>
					) : (
						<h2>No Items in the Cart</h2>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartItems;
