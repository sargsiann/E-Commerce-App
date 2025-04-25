import React from 'react';
import { useContext } from 'react';
import {AppContext} from '../context';

function	Cart() {
	let { state, reducer } = useContext(AppContext);
	
	const inCart = state.filter((product) => product.inCart);
	return (
		<div className="cart">
			<h2>Cart</h2>
			{inCart.length === 0 ? (
				<p>Your cart is empty</p>
			) : (
				<div className="cart-list">
					{inCart.map((product) => (
						<div className="cart-item" key={product.id}>
							<img src={product.image} alt={product.name} />
							<h2>{product.title}</h2>
							<p>${product.price}</p>
							<button onClick={() => reducer('REMOVE',product)}>Remove from Cart</button>
						</div>
					))}
					<div className="cart-total">
						<h2>Total: ${inCart.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</h2>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;