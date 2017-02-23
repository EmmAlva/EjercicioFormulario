function fichaCompleta(){
	var elemento = document.getElementById("resultado");
	elemento.innerHTML = 
	"<ul><li>Nombre: "+document.getElementById("nombre").value + "</li>"+
		"<li> Apellido : " + document.getElementById("apellido").value + "</li>"+
		"<li>DNI :" + document.getElementById("dni").value + "</li>"+
		"<li> Dirección: " + document.getElementById("direccion").value +"</li>";
	"</ul>"
		}