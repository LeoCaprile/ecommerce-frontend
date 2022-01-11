import { getProducts } from '../constants';

const productTemplate = ({ name, id, category, discount, price, url_image }) => `
<card item-id="${id}" category-id="${category}" class="bg-white m-4 p-2 flex flex-col shadow-lg w-full h-full">
        <div class = "grid h-full place-content-center">
        <img class=" object-cover" src="${url_image}" onerror="this.onerror=null; this.src='./assets/imagen-no-encontrada.png'" loading="lazy" alt="">
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

export const renderProducts = () => {
	const productContainer = document.getElementById('product-container');

	fetch(getProducts()).then((data) => data.json()).then((data) => {
		data.forEach((productData) => {
			const product = document.createElement('div');
			product.innerHTML = productTemplate(productData);
			productContainer.append(product.firstElementChild);
		});
	});
};

renderProducts();
