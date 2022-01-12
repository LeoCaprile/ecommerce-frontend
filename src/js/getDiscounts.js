import { getDiscounts } from '../constants';
import { productTemplate, loader } from './renderProducts';

const discounts = document.getElementById('discounts');

const fetchDiscounts = async () => {
	const productContainer = document.getElementById('product-container');
	productContainer.innerHTML = loader;

	const response = await fetch(getDiscounts);
	const discountProducts = await response.json();

	productContainer.innerHTML = '';
	const isDataEmpty = discountProducts.length;

	if (isDataEmpty) {
		discountProducts.forEach((data) => {
			const product = document.createElement('div');
			product.innerHTML = productTemplate(data);
			productContainer.append(product.firstElementChild);
		});
	} else {
		productContainer.innerHTML = 'poto';
	}
};

discounts.addEventListener('click', () => {
	fetchDiscounts();
});
