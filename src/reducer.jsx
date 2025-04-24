function	dispatch(state, action) {
	switch (action.type) {
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