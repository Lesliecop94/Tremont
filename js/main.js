

// APPARITION DU BURGER AU CLICK
var burger_menu = document.querySelector('.burger');
var menu = document.querySelector('.sider');
var cross = document.querySelector('.cross');

burger_menu.addEventListener('click', function () {
	menu.classList.toggle('active');
});

cross.addEventListener('click', function () {
	menu.classList.toggle('active');
});

