import React, { useContext } from "react";
import { AppContext } from "../context";

function	ProductList() {
	let { state, reducer } = useContext(AppContext);

	return (
		<div className="product-list">
			{state.map((product) => (
				<div className="product" key={product.id}>
					<img src={product.image} alt={product.name} />
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
					<button onClick={() => reducer({ type: 'ADD_TO_CART', payload: product })}>Add to Cart</button>
				</div>
			))}
			{state.error && <div className="error">{state.error}</div>}		
		</div>
	);
}
export default ProductList;