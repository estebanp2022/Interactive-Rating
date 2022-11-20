let btn = document.querySelector(".btn");
let submissionContainer = document.querySelector(".submission");
let ratings = document.querySelectorAll(".ratings");
let customerSelection = document.querySelector(".customer-selection");
let ratingContainer = document.getElementById("rating-container");
let ratingCard = document.querySelector(".rating-card");
let prevButton = null;

// Rating Selection
ratingContainer.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  e.target.classList.add("active");

  if (prevButton !== null) {
    prevButton.classList.remove("active");
  }
  prevButton = e.target;
});

// Submit Button
btn.addEventListener("click", function () {
  ratingCard.style.display = "none";
  submissionContainer.style.display = "flex";

  customerSelection.innerText = `You selected ${selectedRating} out of 5`;
});
