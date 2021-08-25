"use strict";

const showButton = document.querySelector(".show-btn");
const endButton = document.querySelector(".end-btn");
const modalWindow = document.querySelector(".modal");

showButton.addEventListener("click", function () {
  /* remove a class of the modal */
  modalWindow.classList.remove("hidden");
});

const closeModal = () => {
  /* add a class to the modal */
  modalWindow.classList.add("hidden");
};

endButton.addEventListener("click", closeModal);

/* recognize the key press from keyboard */
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});
