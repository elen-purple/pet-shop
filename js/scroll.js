const scrollBtn = document.querySelector("#scroll-btn");
const scrollList = document.querySelector("#scroll-list");

scrollBtn.addEventListener("click", () => {
  scrollList.classList.toggle("is-hidden");
});
