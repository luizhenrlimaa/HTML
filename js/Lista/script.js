function adicionaring() {
	
	var ing = document.getElementById("Ingrediente").value;

	var listahtml = document.getElementById("lista").innerHTML;

	listahtml = listahtml + "<li>" + ing + "</li>";

	document.getElementById("lista").innerHTML = listahtml;
}