import { getProducts } from '../constants';
import notFoundImg from '../assets/imagen-no-encontrada.png';

export const productTemplate = ({ name, id, category, discount, price, url_image }) => `
<card item-id="${id}" category-id="${category}" class="bg-white m-4 p-2 flex flex-col shadow-lg w-full h-full">
        <div class = "grid h-full place-content-center">
        <img class=" object-cover" src="${url_image}" onerror="this.onerror=null; this.src='${notFoundImg}'" loading="lazy" alt="">
        </div>         
        <h1 class="text-center text-xl font-medium text-gray-500 pb-14">${name}</h1>
        <hr>
        <div class="flex justify-between items-center h-20">
        <div>
            <span class="text-gray-500 text-lg font-bold ml-5">$${price}</span>
            ${discount
				? '<span class="bg-orange-500 text-sm p-1 text-white rounded-3xl">-' + discount + '%</span>'
				: ''}
        </div>
        <button class="flex justify-center w-20"><i class="fas fa-cart-plus fa-2x"></i></button>
        </div>
</card>
`;

export const loader =
	'<div class="absolute left-1/2 top-1/4 place-self-center rounded-full border-8 border-l-transparent border-blue-500 w-20 h-20 transition-all animate-spin duration-200 ease-linear"></div>';

export const productNotFoundMsg = `<div class="text-center w-50 h-20 col-span-4 row-end-3 "><i class="mb-5 fas fa-search fa-7x"></i><i class="relative right-20 bottom-8 fas fa-question fa-3x"></i>
<h1 class="text-3xl">No hemos podido encontrar el producto que buscabas</h1>
</div>`;

export const renderProducts = async (name, category, price) => {
	const productContainer = document.getElementById('product-container');
	productContainer.innerHTML = loader;

	const response = await fetch(getProducts(name, category, price));
	const fetchedProducts = await response.json();

	productContainer.innerHTML = '';
	const isDataEmpty = fetchedProducts.length;
	if (isDataEmpty) {
		fetchedProducts.forEach((productData) => {
			const product = document.createElement('div');
			product.innerHTML = productTemplate(productData);
			productContainer.append(product.firstElementChild);
		});
	} else {
		productContainer.innerHTML = productNotFoundMsg;
	}
};

renderProducts();
