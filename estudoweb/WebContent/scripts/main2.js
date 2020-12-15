/**
 * identificão de caracteres inválidos!!
 */
function somenteNumeros(num) { 
	let er = /[^0-9]/;
	er.lastIndex = 0;
	let campo = num;
	if (er.test(campo.value)) {
		alert('Somente Números!!');
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

