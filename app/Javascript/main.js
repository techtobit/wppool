
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



document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section');

  const options = {
    threshold: 0.5 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        switch (sectionId) {
          case 'wppool_index':
            navbar.style.backgroundColor = '#F3F3F3';
            break;
          case 'companies':
            navbar.style.backgroundColor = '#F3F3F3';
            break;
          case 'section3':
            navbar.style.backgroundColor = '#D3D3D3';
            break;
          default:
            navbar.style.backgroundColor = 'transparent';
        }
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
	
});
