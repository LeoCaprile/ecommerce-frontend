import { renderProducts } from './renderProducts';

const allProducts = document.getElementById('all-products');

allProducts.addEventListener('click', () => {
	renderProducts();
});
