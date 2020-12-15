/**
 * Adiciona o nome de usu�rio na p�gina.
 */
let meuCabecalho = document.querySelector('h2');
let meuBotao = document.querySelector('button');

function defineNomeUsuario(){
	let nomeUsuario = prompt('Por favor, digite seu nome: ');
	if (nomeUsuario !== null){
		if (!nomeUsuario){ // Se o nomeUsuario est� vazio.
			defineNomeUsuario();
		}else {
			localStorage.setItem('nome', nomeUsuario);
			meuCabecalho.textContent = 'Bem Vindo, ' + nomeUsuario + '!!';
		}
	}
}

let nomeUsuario = localStorage.getItem('nome'); 
if(!nomeUsuario) {
	defineNomeUsuario();
} else {
	meuCabecalho.textContent = 'Bem Vindo, ' + nomeUsuario;	
}

meuBotao.onclick = function() {
	defineNomeUsuario();
}