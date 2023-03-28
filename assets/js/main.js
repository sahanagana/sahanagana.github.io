// Get modal
var modal = document.getElementById("socials");

// Get the buttons that opens the modal
var sbtn = document.getElementById("soc");
var rbtn = document.getElementById("res");
var pbtn = document.getElementById("proj");
var ebtn = document.getElementById("ext");
//Get modal content
var con = document.getElementByID("mod")
// When the user clicks on the button, open the  associated modal
//SOCIAL
sbtn.onclick = function () {
  modal.style.display = "block";
  //change content to social
  
  con.classList.add("in");
};
//RESUME
rbtn.onclick = function () {
  modal.style.display = "block";
  //change content to social
  con.innerHTML = `
  <a href = 'https://www.linkedin.com/in/sahana-ganapathy/' class = 'ddlink'><i class='ri-linkedin-line'></i></br>LinkedIn</a> </br></br>
  <a href = 'https://github.com/sahanagana' class = 'ddlink'><i class='ri-github-line'></i></br>Github</a></br></br>
  <h4><em>click anywhere else to close</em></h4>
  `;
  //insert
  con.classList.add("in");
};
//PROJECTS
pbtn.onclick = function () {
  modal.style.display = "block";
  //change content to social
  con.innerHTML = `
  <a href = 'https://www.linkedin.com/in/sahana-ganapathy/' class = 'ddlink'><i class='ri-linkedin-line'></i></br>LinkedIn</a> </br></br>
  <a href = 'https://github.com/sahanagana' class = 'ddlink'><i class='ri-github-line'></i></br>Github</a></br></br>
  <h4><em>click anywhere else to close</em></h4>
  `;
  //insert
  con.classList.add("in");
};
//EXTRAS
ebtn.onclick = function () {
  modal.style.display = "block";
  //change content to social
  con.innerHTML = `
  <a href = 'https://www.linkedin.com/in/sahana-ganapathy/' class = 'ddlink'><i class='ri-linkedin-line'></i></br>LinkedIn</a> </br></br>
  <a href = 'https://github.com/sahanagana' class = 'ddlink'><i class='ri-github-line'></i></br>Github</a></br></br>
  <h4><em>click anywhere else to close</em></h4>
  `;
  //insert
  con.classList.add("in");
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
