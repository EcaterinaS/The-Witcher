var mySwiper = new Swiper('.swiper-container', {
    loop:true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
      },

      breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuButton = addEventListener('click', function(){
  menu.classList.toggle('header-active');
  
})

var menuBtn = document.querySelector('.menu-btn');
menuButton = addEventListener('click', function(){
  menuBtn.classList.toggle('menu-btn-active');
})


