function ver( ) {
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").innerHTML;

	if (n1 == n2 || n1==n3 || n2 == n3) {
		alert("ALGUNS DOS NÚMEROS SÃO IGUAIS");
	}

	else {
		alert("SÃO DIFERENTES");
	}

	reset();
}

function reset(){
	document.getElementById("n2").value = "" ;

	var r = Math.floor(Math.random() * 100);
	document.getElementById("n1").innerHTML = r ;

	var r3 = Math.floor(Math.random() * 100);
	document.getElementById("n3").innerHTML = r3 ;
}