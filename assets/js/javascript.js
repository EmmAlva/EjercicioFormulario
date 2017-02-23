var arra = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, 
			{ nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
			{ nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
			{ nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
			{ nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }]

var registro = document.getElementById("uno");

	for(var indice in arra){
		  registro.innerHTML += "<div><ul><li>Nombre: "+arra[indice].nombre + "</li>"+
						"<li>Apellido: " +arra[indice].apellido + "</li>"+
						"<li>Rol: " +arra[indice].rol + "</li>"+
						"<li>Cumpleaños: " +arra[indice].cumpleanios + "</li></ul></div>";
		 }



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
