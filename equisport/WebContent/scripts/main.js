/**
 * 
 */
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function somenteNumeros(num) { 
	let er = /[^0-9]/;
	er.lastIndex = 0;
	let campo = num;
	if (er.test(campo.value)) {
		alert('Somente N�meros!!');
	}
}

function tecla(){
	evt = window.event;
	let tecla = evt.keyCode;
	
	if(tecla > 47 && tecla < 58){
		alert('Apenas Letras!!!!');
		evt.preventDefault();
	}
}

