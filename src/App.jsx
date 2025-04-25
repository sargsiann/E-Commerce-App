import React, { createContext, useReducer,useEffect, useState } from 'react';

import './App.css'
import { AppProvider } from './context.jsx'
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';

function App() {

	const [cart, setCart] = useState(false);
  return (
    <>
		<div className='App'>
			<h1>Product List</h1>
			<button onClick={() => setCart(!cart)}>Toggle Cart</button>
			<AppProvider>
				{!cart && <ProductList />}
				{cart && <Cart />}
			</AppProvider>	
		</div>
    </>
  )
}

export default App
