	function fichaCompleta(){

	var elemento = document.getElementById("resultado");

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value
	var direccion = document.getElementById("direccion").value
	
	elemento.innerHTML = "Resultados"+
		"<li>Nombre: "+ nombre + "</li>"+
		"<li> Apellido : " + apellido + "</li>"+
		"<li>DNI :" + document.getElementById("dni").value + "</li>"+
		"<li> Dirección: " + document.getElementById("direccion").value +"</li>";
	}

/*function allnumeric(dni)
   {
      var numbers = /^[0-9]+$/;
      if(dni.value.match(numbers))
      {
      alert('Your Registration number has accepted....');
      document.form1.text1.focus();
      return true;
  		}
  		else
      {
      alert('Please input numeric characters only');
      document.form1.text1.focus();
      return false;
      }
   }
*/