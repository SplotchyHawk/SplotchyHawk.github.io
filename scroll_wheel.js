// Define variables
let isDown = false;
let startX;
let scrollLeft;
const images = document.querySelectorAll('#scroll-container img'); // Select all images in the scroll container
const bigImage = document.querySelector('#big-image'); // Select the big image element

// Add mousedown event listener to each image in the scroll container
images.forEach(image => {
  image.addEventListener('mousedown', () => {
    bigImage.src = image.src; // Set the source of the big image to the source of the clicked image
  });
});

// Select the scroll container element
const scrollContainer = document.querySelector('#scroll-container');

// Add mousedown event listener to the scroll container
scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

// Add mouseleave event listener to the scroll container
scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
});

// Add mouseup event listener to the scroll container
scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
});

// Add mousemove event listener to the scroll container
scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 3; // scroll three times faster
  scrollContainer.scrollLeft = scrollLeft - walk;
});
