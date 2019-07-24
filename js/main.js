(function () {
  var test = document.querySelectorAll("button");
  var button1 = test[0];
  var button2 = test[1];
  var button3 = test[2];

  document.addEventListener('click', function(event) {
    if (event.target === button1) {
      button1.classList.toggle("button-danger"); }
	else if (event.target === button2) {
    button2.innerHTML = "you clicked me"; }
	else if (event.target === button3) {
    button2.innerHTML = "button two"; }
	}, false);

})();
