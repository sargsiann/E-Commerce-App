function	dispatch(state, action) {
	let storage = JSON.parse(localStorage.getItem('cart')) || [];
	switch (action.type) {
		case 'SET_PRODUCTS':
			return (action.payload.map((product) => {
				return { ...product, inCart: storage.some((item) => item.id === product.id)}
			}));
		case 'SET_ERROR':
			return (action.payload);
		case 'ADD_CART':
			return (state.map((product) => {
				if (product.id === action.payload.id) {
					storage.push(product);
					localStorage.setItem('cart', JSON.stringify(storage));
					return { ...product, inCart: true }
				}
				return product;
			}));
		case 'REMOVE':
			return (state.map((product) => {
				if (product.id === action.payload.id) {
					storage = storage.filter((item) => item.id !== product.id);
					localStorage.setItem('cart', JSON.stringify(storage));
					return { ...product, inCart: false }
				}
				return product;
			}));
		default:
			return state
	}
}

export default dispatch;