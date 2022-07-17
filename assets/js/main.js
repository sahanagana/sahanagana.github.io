// Get the modal
var modal = document.getElementById("socials");

// Get the button that opens the modal
var btn = document.getElementById("soc");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.getElementsByClassName("content1").classList.add("in");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};