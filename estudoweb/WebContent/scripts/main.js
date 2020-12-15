/**
 * Alterando imagem do site com um click e 
 */
let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function() {
	let src = minhaImagem.getAttribute('src');
	if (src === 'imagens/icone-studio.png') {
		minhaImagem.setAttribute('src', 'imagens/icone-studio2.png'); 
	} else {
		minhaImagem.setAttribute('src', 'imagens/icone-studio.png');
	}
}
