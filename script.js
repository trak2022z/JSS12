"use strict";
(function() {
window.addEventListener("load", init);
// no access to the document here
function init() {
  
  // create a new <h2> node
  let newHeading = document.createElement("h2");
  newHeading.textContent = "This is a new heading!";
  newHeading.id = 'content';
  document.body.appendChild(newHeading);
}

  // create a new <li> node
  let li = document.createElement("li");
  li.textContent = "Contact!";
  
  // select the ul menu element and add <li>
  const menu = document.querySelector('#menu');
  menu.appendChild(li);


  
  //Remove element by id
  let el = document.getElementById("fyi");
  el.innerHTML = "";
  
})();



