var titleColorChange = document.querySelector(".title");
var titleTextColorChange = document.querySelector(".h1");

titleColorChange.addEventListener("click", function () {
  titleColorChange.classList.toggle("is-active");
  titleTextColorChange.classList.toggle("is-active");
  // setTimeout(() => {
  //   titleColorChange.classList.remove("is-active");
  //   titleTextColorChange.classList.remove("is-active");
  // }, "2000");
});

// var infoAdd = document.querySelector(".product");
// var infoAddText = document.querySelector(".product-info");
// infoAdd.addEventListener("click", function () {
//   infoAddText.classList.toggle("is-active");
// });

var productChange = document.querySelector(".product");
var infoAdd = document.querySelector(".product-info");

productChange.addEventListener("click", function () {
  productChange.classList.toggle("is-active");
  infoAdd.classList.toggle("is-active");
});
