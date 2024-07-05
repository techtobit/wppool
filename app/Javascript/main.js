
const openMenuBtn = document.getElementById('open_toggol_menu');
const close_MenuBtn = document.getElementById('close_toggol_menu');
const menu = document.getElementById('menuList');

openMenuBtn.addEventListener('click', () => {
	console.log('cl');
  menu.classList.add('visible');
});
close_MenuBtn.addEventListener('click', () => {
  menu.classList.remove('visible');
});