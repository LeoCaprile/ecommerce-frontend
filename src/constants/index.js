export const getCategories = 'https://ecommerce-backend-amber.vercel.app/api/getCategories';
export const getProducts = (name = '', category = '', price = '') =>
	`https://ecommerce-backend-amber.vercel.app/api/getProducts?name=${name}&category=${category}&price=${price}`;
export const getDiscounts = 'https://ecommerce-backend-amber.vercel.app/api/getDiscounts';
