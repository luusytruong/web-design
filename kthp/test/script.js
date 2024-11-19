let index = 0;
let width = document.querySelector(".slider-item").getBoundingClientRect().width;
function transform(option) {
  if (option === "next") {
    if (index < 3) {
      index++;
      document.querySelector(".slider-wrapper").style.transform = `translateX(-${width * index}px)`;
    }
  } else if (option == "pre") {
    if (index > 0) {
      index--;
      document.querySelector(".slider-wrapper").style.transform = `translateX(-${width * index}px)`;
    }
  }
}
let interval;
const auto = () => {
  interval = setInterval(() => {
    if (index == 3) {
      index = 0;
      document.querySelector(".slider-wrapper").style.transform = `translateX(${0}px)`;
      return;
    }
    transform("next");
  }, 2000);
};
document.querySelector(".next").addEventListener("click", () => {
  clearInterval(interval);
  transform("next");
  auto();
});
document.querySelector(".pre").addEventListener("click", () => {
  clearInterval(interval);
  transform("pre");
  auto();
});
auto();
