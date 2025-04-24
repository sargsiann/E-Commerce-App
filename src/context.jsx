import { createContext,useReducer } from "react";

import	dispatch from './reducer.jsx'
import getProducts from './api.jsx'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dispatch, []);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let p = getProducts();
	}, []);

	return (
		<AppContext.Provider value={{ state, dispatch, loading }}>
			{children}
		</AppContext.Provider>
	);
}