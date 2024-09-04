// Get the modal
var modal = document.getElementById("socials");
// Get the buttons that opens the modal
var sbtn = document.getElementById("soc");
var rbtn = document.getElementById("res");
var pbtn = document.getElementById("proj");
var ebtn = document.getElementById("ext");
//Get modal content
var con = document.getElementsByClassName("content");
// When the user clicks on the button, open the  associated modal
//SOCIAL
sbtn.onclick = function () {
  modal.style.display = "block"; con.classList.add("in");
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
