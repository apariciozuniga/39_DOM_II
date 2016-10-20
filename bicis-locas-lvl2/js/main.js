
/*var  = document.querySelectorAll("span");
	var parentNode.removeChild("span");
	return false;
	if(name == null){
	 	var span = document.createElement(span);
	 	span.setAttribute("class", "error")

	 }
	
*/
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;




function validateForm(){
	/* Escribe tú código aquí */

		if (nombre==null) {
		var span = document.createElement("span");
		span.setAttribute("class","error");
		
		}

		var spans=document.getElementsByTagName("span");
		while(span.length>0){
			spans[0].parentElement.removeChild(spans[0]);
			if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
			alert("El campo de nombre esta vacio");
				
			}
			else if (!(/^[a-zA-Z\s]*$/.test(nombre))){
				alert("Escribe tu nombre empezando con mayúscula");
			}
			else if (!(/^[A-Z\s]*$/.test(nombre[0]))){
				alert("La primera letra es en mayuscula");
			}

		}
	
		
}

