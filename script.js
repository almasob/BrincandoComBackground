var corHexa = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var botao = document.querySelector("button");
var body = document.querySelector("body");
var corTexto = document.querySelector(".corTexto");
corTexto.innerHTML = "#ffffff";


botao.addEventListener("click",function(){
var cor = "#";
		for(i=0; i < 6 ;i++){
		cor += corHexa[numeroAleatórioCor()];
		
	}

	body.style.backgroundColor=cor;
	corTexto.innerHTML = cor;

})


function numeroAleatórioCor(){
	var tamanho = corHexa.length;
	var numero = Math.floor(Math.random()*tamanho);

	return numero;
}