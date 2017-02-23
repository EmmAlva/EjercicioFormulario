var arra = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
			{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
			{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
			{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
			{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }]

var registro = document.getElementById("uno");

<<<<<<< HEAD
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
	
=======
	for(var indice in arra){
		  registro.innerHTML += "<div><ul><li>Nombre: "+arra[indice].nombre + "</li>"+
						"<li>Apellido: " +arra[indice].apellido + "</li>"+
						"<li>Rol: " +arra[indice].rol + "</li>"+
						"<li>Cumpleaños: " +arra[indice].cumpleanios + "</li></ul></div>";
		 }


>>>>>>> 03eb3dc3ab982c3f3a35bd21f301cd1a158d67c9

/*
var arra = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
			{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
			{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
			{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
			{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }]

var x ="" ;

	for(var prop in arra){
		  x += "<div><ul><li>"+arra[prop].nombre + "</li>"+
						"<li>" +arra[prop].apellido + "</li>"+
						"<li>" +arra[prop].rol + "</li>"+
						"<li>" +arra[prop].cumpleanios + "</li></ul></div>";
		 }
document.write(x);

*/
