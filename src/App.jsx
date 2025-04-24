import React, { createContext, useReducer,useEffect } from 'react';

import './App.css'
import { AppProvider } from './context.jsx'
import ProductList from './components/ProductList.jsx';

function App() {

  return (
    <>
		<div className='App'>
			<h1>Product List</h1>
			<AppProvider>
				<ProductList />
			</AppProvider>			
		</div>
    </>
  )
}

export default App
