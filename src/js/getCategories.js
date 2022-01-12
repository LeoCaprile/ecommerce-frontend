import { getCategories } from '../constants/index';
import { renderProducts } from './renderProducts';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const categoryTemplate = (category, id) =>
	`<a id="${id}" class="bg-white cursor-pointer px-4 py-2 block hover:bg-slate-300">${category}</a>`;

const renderCategories = () => {
	const dropdownCategories = document.getElementById('dropdown-categories');

	fetch(getCategories).then((data) => data.json()).then((data) => {
		data.forEach((el) => {
			const { name, id } = el;

			const category = document.createElement('div');
			category.innerHTML = categoryTemplate(capitalizeFirstLetter(name), id);
			category.firstChild.addEventListener('click', () => {
				renderProducts('', id);
			});

			dropdownCategories.appendChild(category);
		});
	});
};

renderCategories();
