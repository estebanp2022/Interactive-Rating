let btn = document.querySelector(".btn");
let ratingContainer = document.querySelector(".rating");
let submissionContainer = document.querySelector(".submission");
let ratings = document.querySelectorAll(".ratings");
let customerSelection = document.querySelector(".customer-selection");
let ratingsContainer = document.getElementById("rating-container");

function renderBtnColor() {
  for (let rating of ratings) {
    rating.addEventListener("click", function () {
      rating.classList.toggle("highlight");
    });
  }
}

let selectedRating = ratingContainer.addEventListener("change", function (e) {
  e.target.id;
});

// let testing = ratingsContainer.addEventListener("change", function (e) {
//   console.log(e.target.id);
// });

btn.addEventListener("click", function () {
  ratingContainer.style.display = "none";
  submissionContainer.style.display = "flex";

  customerSelection.innerText = `You selected ${selectedRating} out of 5`;
});

renderBtnColor();
