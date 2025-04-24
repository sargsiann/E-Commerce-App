import React, { useContext } from "react";
import { AppContext } from "../context";
import "../App.css"

function	ProductList() {
	let { state, reducer } = useContext(AppContext);

	console.log(state);
	return (
		<div className="product-list">
			{state.map((product) => (
				<div className="product" key={product.id}>
					<img src={product.image} alt={product.name} />
					<h2>{product.title}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
					{!product?.inCart ? <button onClick={() => reducer({ type: 'ADD_CART', payload: product })}>Add to Cart</button> :
						<button style={
							{
								backgroundColor: 'red',
								color: 'white',
								border: 'none',
								padding: '10px 20px',
								cursor: 'pointer'
							}
						} onClick={() => reducer({ type: 'REMOVE', payload: product })}>Remove from Cart</button>}
				</div>
			))}
		</div>
	);
}
export default ProductList;