let countValue = document.querySelector(".count-value");
let incre = document.querySelector(".btn-incre");
let decre = document.querySelector(".btn-decre");

const display = () => {
  mainCount = parseInt(localStorage.getItem("count")) || 0;
  countValue.textContent = mainCount;
};

const updateCount = (count) => {
  mainCount = count;
  localStorage.setItem("count", count);
  display();
};

incre.addEventListener("click", () => {
  updateCount(mainCount + 1);
});
decre.addEventListener("click", () => {
  updateCount(mainCount - 1);
});

display();
