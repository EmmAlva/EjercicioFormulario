function fichaCompleta(){

	var elemento = document.getElementById("resultado");

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value
	var direccion = document.getElementById("direccion").value
	
	if(nombre!== "" && apellido !== "" && dni !== "" && direccion!== ""){
		elemento.innerHTML = "Resultados"+
		"<li>Nombre: "+ nombre + "</li>"+
		"<li> Apellido : " + document.getElementById("apellido").value + "</li>"+
		"<li>DNI :" + document.getElementById("dni").value + "</li>"+
		"<li> Dirección: " + document.getElementById("direccion").value +"</li>";
	}
	


	
		}