import { renderProducts } from './renderProducts';
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keydown', (e) => {
	if (e.keyCode !== 13) return;

	const searchText = e.target.value.toLowerCase();

	renderProducts(searchText);
});
