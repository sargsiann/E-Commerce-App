function	dispatch(state, action) {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return (action.payload.map((product) => {
				return { ...product, inCart: false }
			}));
		case 'SET_ERROR':
			return (action.payload);
		case 'ADD_CART':
			return (state.map((product) => {
				if (product.id === action.payload.id) {
					return { ...product, inCart: true }
				}
			}));
		case 'REMOVE':
			return (state.map((product) => {
				if (product.id === action.payload.id) {
					return { ...product, inCart: false }
				}
			}));
		default:
			return state
	}
}

export default dispatch;