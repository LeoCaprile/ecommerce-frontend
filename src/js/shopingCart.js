import { renderCounter } from './countItemsOnCart';
import notFoundImg from '../assets/imagen-no-encontrada.png';
if (!localStorage.getItem('cart')) {
	localStorage.setItem('cart', JSON.stringify([]));
}
const cartButton = document.getElementById('cart-button');
const shopingCart = document.getElementById('shoping-cart');
//if there's no cart in localstorage create one, otherwise, dont.

//display shoping cart when cart icon is clicked, hide it when clicked again.
cartButton.addEventListener('click', () => {
	shopingCart.classList.toggle('hidden');
});

const templateCartItem = ({ url_image, name, id, price, amount }) => `<card id="${id}" class="flex items-center gap-3"> 
<img class="w-12" src="${url_image}" onerror="this.onerror=null; this.src='${notFoundImg}'">
<p class="text-xs md:text-base">${name}</p>
<span class="font-medium text-center w-20 text-xs md:text-base ml-auto">X ${amount}</span>
<span class="font-medium text-xs md:text-base">$${amount * price}</span>
<i id="product-delete" class="fas fa-trash-alt cursor-pointer"></i>
</card>`;

const emptyCart = '<div class="font-bold px-20">Tu carro esta vacio</div>';

export const renderCart = () => {
	const cartProducts = document.getElementById('cart-products');
	const cart = JSON.parse(localStorage.getItem('cart'));

	if (cart.length) {
		cartProducts.innerHTML = '';
		cart.forEach((item) => {
			const cartProduct = document.createElement('div');
			cartProduct.innerHTML = templateCartItem(item);
			cartProduct.firstElementChild.addEventListener('click', (e) => {
				if (e.target.id === 'product-delete') {
					const name = cartProduct.firstElementChild.children[1].textContent;

					if (cart.find((item) => item.name === name)) {
						cart.forEach((item) => {
							if (item.name === name && item.amount !== 0) {
								item.amount--;
								localStorage.setItem('cart', JSON.stringify(cart));
							}
							if (item.name === name && item.amount === 0) {
								const newCart = cart.filter((item) => item.name !== name);
								localStorage.setItem('cart', JSON.stringify(newCart));
							}
						});
					}
				}
				renderCart();
				renderCounter();
			});
			cartProducts.appendChild(cartProduct);
		});
	} else {
		cartProducts.innerHTML = emptyCart;
	}
};

renderCart();
