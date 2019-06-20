window.onload = function () {

	new WOW({
		mobile: false
	}).init();

	let nav = document.querySelector(".header__navigation");
	let toggle = document.querySelector('.header__nav-toggle');

	toggle.addEventListener('click', function(event){
		nav.classList.toggle('header__navigation--active');
		this.classList.toggle('on');
	});
	


}
