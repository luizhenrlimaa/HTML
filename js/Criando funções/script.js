function fazeracao(nome , numero) {

	var area = document.getElementById("area");
	var texto = prompt("Qual o seu sobrenome?");

	area.innerHTML = nome + " "  + texto + " " + numero;
}