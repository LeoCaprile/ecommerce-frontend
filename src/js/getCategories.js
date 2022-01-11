import { getCategories } from '../constants/index';

const dropdownCategories = document.getElementById('dropdown-categories');

const categoryTemplate = (category, id) =>
	`<a href="/" id="${id}" class="bg-white px-4 py-2 hover:bg-slate-300">${category}</a>`;

fetch(getCategories).then((data) => data.json()).then((data) => {
	console.log(data);
	data.forEach((el) => {
		const { name, id } = el;

		const category = document.createElement('div');
		category.innerHTML = categoryTemplate(name, id);

		dropdownCategories.append(category);
	});
});
