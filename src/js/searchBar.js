import { renderProducts } from './renderProducts';
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keydown', (e) => {
	e.preventDefault();
	if (e.code !== 'Enter') return;

	const searchText = e.target.value;

	renderProducts(searchText);
});
