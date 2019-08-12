function op() {
	var valor1 = parseInt(document.getElementById("v1").value);
	var valor2 = parseInt(document.getElementById("v2").value);

	var soma = valor1 + valor2;

	var mul = valor1 * valor2;

	alert("Valor 1 = " + valor1);
	alert("Valor 2 = " + valor2);
	alert("A soma dos valores é: " + soma);
	alert("A multiplicação dos valores é: " + mul);

}