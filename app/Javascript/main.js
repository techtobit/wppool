// menu section 
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


//chart js
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    breakpoints: {
      800: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  }).mount();
});



// dynamic stiky nav bar 

document.addEventListener('DOMContentLoaded', () => {

  const quickNavBtn = document.getElementById('quck_nav_btn');
  const heroSection = document.getElementById('hero');
  const footerSection = document.getElementById('footer');


  quickNavBtn.addEventListener('click', function () {
    if (window.scrollY < heroSection.clientHeight) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
      
    } else {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight-899) {
      quickNavBtn.classList.add('up');
      quickNavBtn.style.transform = 'rotate(90deg)';
      
    } else {
      quickNavBtn.classList.remove('up');
      quickNavBtn.style.transform = 'rotate(-90deg)';
      
    }
  });


  const navbar = document.getElementById('navbar');
  const downloadBtn = document.getElementById('download_btn')
  const shareBtn = document.getElementById('share_btn')
  const logoWhite = document.getElementById('logo_white')
  const logoBlack = document.getElementById('logo_black')
  const shareIconWhite = document.getElementById('share_icon_white')
  const shareIconBack = document.getElementById("share_icon_black");
  const menuIconWhite = document.getElementById("menu_icon_white");
  const menuIconBack = document.getElementById("menu_icon_black");
  const sections = document.querySelectorAll('.section');




  const options = {
    threshold: 0.8
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        switch (sectionId) {
          case 'hero':
            navbar.style.backgroundColor = 'transparent';
            downloadBtn.style.borderColor = '#FFFFFF';
            downloadBtn.style.color = '#FFFFFF';
            shareBtn.style.borderColor = '#FFFFFF';
            logoBlack.style.display = 'none'
            logoWhite.style.display = 'block'
            shareIconWhite.style.display = 'block';
            shareIconBack.style.display = 'none'
            menuIconWhite.style.display = 'block';
            menuIconBack.style.display = 'none'
            break;
          case 'index_table':
            navbar.style.backgroundColor = '#E6E6E6';
            downloadBtn.style.borderColor = '#2042B6';
            downloadBtn.style.color = '#000000';
            shareBtn.style.borderColor = '#AFCD80';
            logoWhite.style.display = 'none';
            logoBlack.style.display = 'block';
            shareIconWhite.style.display = 'none';
            shareIconBack.style.display = 'block';
            menuIconWhite.style.display = 'none';
            menuIconBack.style.display = 'block'

            break;
          case 'future_istings':
            navbar.style.backgroundColor = '#F3F3F3';
            logoWhite.style.display = 'none'
            logoBlack.style.display = 'block'
            break;
          default:
            navbar.style.backgroundColor = '#F3F3F3';
            downloadBtn.style.borderColor = '#2042B6';
            downloadBtn.style.color = '#191618';
            shareBtn.style.borderColor = '#AFCD80';
            logoBlack.style.display = 'block';
            logoWhite.style.display = 'none';
            shareIconWhite.style.display = 'none';
            shareIconBack.style.display = 'block';
            menuIconWhite.style.display = 'none';
            menuIconBack.style.display = 'block'


        }
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

});
