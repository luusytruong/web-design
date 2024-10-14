//slider prd details img
const prdImg = document.querySelector("img.prd-img-show");

const rowSlider = document.querySelector(".row-prd-silder");
const sliderScroll = rowSlider.querySelector(".slider-scroll");
let sliderImgs = rowSlider.querySelectorAll(".slider-scroll img");

const btnImgLeft =
  rowSlider.querySelector("i.fa-solid.fa-chevron-left") ?? null;
const btnImgRight = rowSlider.querySelector("i.fa-solid.fa-chevron-right");

sliderImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    prdImg.setAttribute("src", img.getAttribute("src"));
  });
});

let widthImg = sliderImgs[0].getBoundingClientRect().width;
let currentTransform = 0;
let indexImg = 0;
let isCoutdowning = true;
let globalTime = 200;

function scrollLeftSlider() {
  sliderScroll.style.transform = `translateX(${currentTransform + widthImg}px)`;
  currentTransform += widthImg;
  sliderScroll.style.transition = `all ease ${globalTime}ms`;
  setTimeout(() => {
    sliderScroll.style.transition = "none";
  }, globalTime);
}

function scrollRightSlider() {
  sliderScroll.style.transform = `translateX(${currentTransform - widthImg}px)`;
  currentTransform -= widthImg;
  sliderScroll.style.transition = `all ease ${globalTime}ms`;
  setTimeout(() => {
    sliderScroll.style.transition = "none";
  }, globalTime);
}

function startSlider() {
  sliderScroll.insertBefore(sliderImgs[5], sliderScroll.firstChild);
  scrollRightSlider();
  indexImg = (indexImg - 1 + sliderImgs.length) % sliderImgs.length;
  currentTransform -= widthImg;
}

startSlider();

btnImgLeft.addEventListener("click", () => {
  if (!isCoutdowning) {
    return;
  }

  isCoutdowning = false;

  indexImg = (indexImg - 1 + sliderImgs.length) % sliderImgs.length;
  sliderScroll.insertBefore(sliderImgs[indexImg], sliderScroll.firstChild);

  sliderScroll.style.transform = `translateX(${-2 * widthImg}px)`;

  setTimeout(() => {
    scrollLeftSlider();
    currentTransform -= widthImg;
  }, 1);

  setTimeout(() => {
    isCoutdowning = true;
  }, `${globalTime}`);
});

btnImgRight.addEventListener("click", () => {
  if (!isCoutdowning) {
    return;
  }

  isCoutdowning = false;

  sliderScroll.appendChild(sliderImgs[indexImg]);
  indexImg = (indexImg + 1) % sliderImgs.length;

  sliderScroll.style.transform = `translateX(${0}px)`;

  setTimeout(() => {
    currentTransform = 0;
    scrollRightSlider();
    currentTransform -= widthImg;
  }, 1);

  setTimeout(() => {
    isCoutdowning = true;
  }, `${globalTime}`);
});
