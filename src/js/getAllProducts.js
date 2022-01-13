import { renderProducts } from './renderProducts';

const allProducts = document.querySelectorAll('.all-products');
Array.from(allProducts).forEach((el) => {
	el.addEventListener('click', () => {
		renderProducts();
	});
});
