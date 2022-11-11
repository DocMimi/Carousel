const images = document.querySelectorAll(".slider img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let slideIndex = 0;
let imagesLength = images.length - 1; 

changeImage(0); 

function changeImage(index) {
  images.forEach((image) => {
    image.style.opacity = 0;
  });

  images[index].style.opacity = 1;
}

prevButton.addEventListener("click", () => {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = imagesLength;
  }

  changeImage(slideIndex);
});

nextButton.addEventListener("click", () => {
  slideIndex++;

  if (slideIndex > imagesLength) {
    slideIndex = 0;
  }

  changeImage(slideIndex);
});
