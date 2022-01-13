const counterContainer = document.getElementById('cart-button-and-count-container');

export const renderCounter = () => {
	const cart = JSON.parse(localStorage.getItem('cart'));

	const count = cart ? cart.reduce((acc, el) => (acc += el.amount), 0) : 0;

	if (count) {
		if (count < 1) {
			counterContainer.children[1].classList.add('hidden');
		} else {
			counterContainer.children[1].classList.remove('hidden');
			counterContainer.children[1].innerText = count;
		}
	} else {
		counterContainer.children[1].classList.add('hidden');
	}
};

renderCounter();
