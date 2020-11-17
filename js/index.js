

var dias_semana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

var dia =prompt ("Que dia es hoy");
 
var mensaje= ""

 	if(dia == "Miércoles"){
		mensaje = "Hoy hay una promocion del 10% en resaltadores"
}

for(var i = 0; i < 7; i++){
	alert(dias_semana[i]);
}

alert(mensaje);

