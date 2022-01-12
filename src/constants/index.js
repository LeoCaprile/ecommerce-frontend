export const getCategories = 'https://ecommerce-backend-r4ajj2pf3-leocaprile.vercel.app/api/getCategories';
export const getProducts = (name = '', category = '', price = '') =>
	`https://ecommerce-backend-r4ajj2pf3-leocaprile.vercel.app/api/getProducts?name=${name}&category=${category}&price=${price}`;
