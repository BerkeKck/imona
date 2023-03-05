//  butonlar
const products = document.querySelector('.products');
const prevButton = document.querySelector('.pre-btn');
const nextButton = document.querySelector('.nxt-btn');

//  tık ilerleme
const scrollAmount = 120; 

prevButton.addEventListener('click', () => {
  products.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  products.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

//  saga sola slide
let isDown = false;
let startX;
let scrollLeft;

products.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - products.offsetLeft;
  scrollLeft = products.scrollLeft;
});

products.addEventListener('mouseleave', () => {
  isDown = false;
});

products.addEventListener('mouseup', () => {
  isDown = false;
});

products.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault(); 
  const x = e.pageX - products.offsetLeft;
  const walk = x - startX;
  products.scrollLeft = scrollLeft - walk;
});
