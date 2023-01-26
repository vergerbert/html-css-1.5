let swiper = document.querySelector('.swiper');
let open = document.querySelector('.open');

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  swiper.classList.toggle('swiper-full');
  this.innerHTML = this.innerHTML === 
  `<img src="./img/close.svg" alt="more">
  <span>Скрыть</span> ` ? 
  `<img src="./img/open.svg" alt="more">
  <span>Показать всё</span>` : 
  `<img src="./img/close.svg" alt="more">
  <span>Скрыть</span> `;
});

window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      init: true
    })
  }
}
