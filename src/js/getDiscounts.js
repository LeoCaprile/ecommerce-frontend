import { getDiscounts } from '../constants';
import { productTemplate, loader, handleCartButton } from './renderProducts';

const discounts = document.querySelectorAll('.discounts');

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
			handleCartButton(product, data);
			productContainer.append(product.firstElementChild);
		});
	} else {
		productContainer.innerHTML = 'poto';
	}
};

Array.from(discounts).forEach((el) => {
	el.addEventListener('click', () => {
		fetchDiscounts();
	});
});
