import { getCategories } from '../constants/index';

const dropdownCategories = document.getElementById('dropdown-categories');

const categoryTemplate = (category, id) =>
	`<a id="${id}" class="bg-white cursor-pointer px-4 py-2 block hover:bg-slate-300">${category}</a>`;

fetch(getCategories).then((data) => data.json()).then((data) => {
	data.forEach((el) => {
		const { name, id } = el;

		const category = document.createElement('div');
		category.innerHTML = categoryTemplate(name, id);

		dropdownCategories.append(category.firstChild);
	});
});
