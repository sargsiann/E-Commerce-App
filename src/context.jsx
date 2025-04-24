import { createContext,useReducer,useEffect } from "react";

import	dispatch from './reducer.jsx'
import getProducts from './api.js'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, reducer] = useReducer(dispatch, []);

	useEffect(() => {
		let p = getProducts();
		p.then((data) => {
			reducer({ type: 'SET_PRODUCTS', payload: data });
		}).catch((error) => {
			reducer({ type: 'SET_ERROR', payload: error });
		})
	}, []);

	return (
		<AppContext.Provider value={{ state, reducer}}>
			{children}
		</AppContext.Provider>
	);
}