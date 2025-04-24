import React, { createContext, useReducer,useEffect } from 'react';

import './App.css'
import	getProducts from './api'
import  dispatch  from './reducer.jsx'

function App() {
  const [products, setProducts] = useReducer(dispatch)

  useEffect(() => {
	let f = getProducts().then((data) => {
		console.log(data)
	});

  }, [])

  return (
    <>
     
    </>
  )
}

export default App
