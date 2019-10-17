function changeColor() {
	var rand = Math.random();
	if(rand > 0.5) { state = true }
	else {state = false }
	if(state) {
  	document.getElementById("buttonColor").style.backgroundColor = "red";
	} else {
		  document.getElementById("buttonColor").style.backgroundColor = "blue";
	}
}

function changeBodyColor() {
  	document.body.style.backgroundColor = "pink";
}