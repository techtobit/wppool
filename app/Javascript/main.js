
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
  const downloadBtn = document.getElementById('download_btn')
  const shareBtn = document.getElementById('share_btn')
  const logoWhite = document.getElementById('logo_white')
  const logoBlack = document.getElementById('logo_black')
  const sections = document.querySelectorAll('.section');



  const options = {
    threshold: 0.8
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        switch (sectionId) {
          case 'wppool_index':
            navbar.style.backgroundColor = '#EFF3F6';
            downloadBtn.style.borderColor = '#2042B6';
            downloadBtn.style.color = '#000000';
            shareBtn.style.borderColor = '#AFCD80';
            logoWhite.style.display = 'none';
            logoBlack.style.display = 'block';

            break;
          case 'future_istings':
            navbar.style.backgroundColor = '#F3F3F3';
            logoWhite.style.display = 'none'
            logoBlack.style.display = 'block'
            break;
          case 'section3':
            navbar.style.backgroundColor = '#D3D3D3';
            break;
          default:
            navbar.style.backgroundColor = 'transparent';
            downloadBtn.style.borderColor = '#FFFFFF';
            downloadBtn.style.color = '#FFFFFF';
            shareBtn.style.borderColor = '#FFFFFF';
            logoBlack.style.display = 'none'
            logoWhite.style.display = 'block'

        }
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

});
