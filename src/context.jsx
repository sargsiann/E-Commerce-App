import { createContext,useReducer } from "react";

import	dispatch from './reducer.jsx'
import getProducts from './api.jsx'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dispatch, []);

	useEffect(() => {
		let p = getProducts();
		p.then((data) => {
			dispatch({ type: 'SET_PRODUCTS', payload: data });
		}).catch((error) => {
			dispatch({ type: 'SET_ERROR', payload: error });
		})
	}, []);

	return (
		<AppContext.Provider value={{ state, dispatch}}>
			{children}
		</AppContext.Provider>
	);
}