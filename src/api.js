const PRODUCTS_URL = 'https://fakestoreapi.com/products';

const getProducts = async function (params) {
	try {
		let f = fetch(PRODUCTS_URL).then((data)=>data.json());
		return f;
	}
	catch (error) {
		return "Error: " + error;
	}
}

export default getProducts;