window.addEventListener('click', (e) => {
	if (!e.target.classList.contains('.nav__mobile')) return;
	let modal = document.querySelector('.active');
	modal.classList.add('active');
	setTimeout(() => {
		modal.classList.remove('active');
	}, 3000)
})