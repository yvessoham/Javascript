const modal = document.getElementById("modales");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalBtnm = document.querySelector("#buttonm");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
closeModalBtnm.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Call openModal function when the page has finished loading
window.addEventListener("load", openModal);

const audio = document.getElementById("myAudio");
const startButton = document.getElementById("buttonm");

function startAudio() {
  audio.play();
}

startButton.addEventListener("click", startAudio);

var modales = document.getElementById("modales");
var span = document.getElementsByClassName("modal hidden")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
