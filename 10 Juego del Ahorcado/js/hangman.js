
var palabras = ["bazinga", "hacker","taza","supercalifragilisticoespiralidoso","perro","unicornio","pizza","sandwich","chelas","rocker","archirequeterecontrapadre"];
var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

var palabra =palabras[Math.floor(Math.random()*(palabras.length+1))];
console.log(palabra);

var longitud = palabra.length;

var contador=0;
//variable para que se guarde el contador.

var error=0;



function comparar(){
	//for (var i = 0; i <longitud; i++) {
	//var contenido = document.getElementById(i).firstChild.data;
		//en esta linea estoy pasando por las posiciones de la palabra para que me traiga la letra que ya elegí.
		//console.log(contenido);
		//if (contenido==""){
			//contador++;
		//este if hace que la variable contador se vaya aumentando cada vez que "contenido" es diferente a "espacio"---es decir, va a contar cada vez que le atine a un espacio.
		//};
	//}		
	if(contador==longitud){
		alert("¿Te crees muy pro no?");
		//console.log(contador);
		}
}

function buscar(letra) {
	var bandera= false;
	console.log(letra);
	//le estamos diciendo que la letra que le estamos enviando ('buscar') la compare con todos las posiciones (para eso es el for) de la palabra random).
	for (var i=0; i<longitud; i++){
		if (letra==palabra[i]) {
			console.log("exito");
			//esta funcion lo que hace es que te compara cada letra de la palabra random con la letra
			document.getElementById(i).innerHTML=palabra[i];
			contador++;
			bandera=true;
			};
	}
	comparar();
	if (bandera!=true) {
		error++;
		console.log(error);
		ahorcado();
	};
	if(error==7){
		alert("Hasta la próxima, baby.");
		}
	console.log(letra);
	document.getElementById(letra).style.background="#1D1799";
}




for(var i=0; i<longitud; i++) {
	console.log(i);
	
	var espacio = document.getElementById("espacios");
//esta primera linea es para indicar dónde se meteran en el html los elementos que crearemos.

	var adivina = document.createElement("div");
//esta línea es para crear el elemento que en este caso es un div

	adivina.innerHTML="&nbsp";
//cada vez que se cree el elemento div, se le va a escribir espacio (&nsb) para que se note los espacios de las letras de la palabra seleccionada.

	adivina.setAttribute("id",i);
//esta lina es para darle un atributo a la variable para identificarla, el valor de la posicion. (sintax-nombre del atributo y el valor)

	espacio.appendChild(adivina);
//pegas el elemento en el html, para que ya lo muestre.

	
}

for (var i = 0; i<=26; i++) {
	console.log(i);
	var letras = document.getElementById("letras");
	var botones =document.createElement("button");
	botones.innerHTML=abecedario[i];
	botones.setAttribute("class","letras");
	botones.setAttribute("onclick","buscar('"+abecedario[i]+"')");
	//cuando de click al boton, empieza la funcion 'buscar' que te ayuda a que cada boton se relacione con la letra que representa.
	botones.setAttribute("id",abecedario[i])
	//se le agrega el atributo id, para que identifique cuando se compara la letra (y entonces con la formulita de arriba (document.getElementById(letra).style.background="#1D1799") se le cambia el estilo jojojojo)
	letras.appendChild(botones);
}

function ahorcado (){
	switch (error){
		case 1:
		var cabeza = document.getElementById("cabeza");
		var circulo = cabeza.getContext("2d");
		circulo.beginPath();
		circulo.arc(150,100,40,0,2*Math.PI);
		circulo.lineWidth=6;
		circulo.stroke();
		break;

		case 2:
		var torso = document.getElementById("torso");
		var torsoarriba = torso.getContext("2d");
		torsoarriba.moveTo(150,0);
		torsoarriba.lineTo(150,600);
		torsoarriba.lineWidth=6;
		torsoarriba.stroke();
		break;

		case 3:
		var cadera = document.getElementById("cadera");
		var caderaabajo = cadera.getContext("2d");
		caderaabajo.moveTo(150,0);
		caderaabajo.lineTo(150,600);
		caderaabajo.lineWidth=6;
		caderaabajo.stroke();
		break;

		case 4:
		var bizquierdo = document.getElementById("bizquierdo");
		var bizq = bizquierdo.getContext("2d");
		bizq.moveTo(300,0);
		bizq.lineTo(-100,400);
		bizq.lineWidth=6;
		bizq.stroke();
		break

		case 5:
		var bderecho = document.getElementById("bderecho");
		var bder = bderecho.getContext("2d");
		bder.moveTo(0,0);
		bder.lineTo(400,400);
		bder.lineWidth=6;
		bder.stroke();
		break;

		case 6:
		var pizquierdo = document.getElementById("pizquierdo");
		var pizq = pizquierdo.getContext("2d");
		pizq.moveTo(0,0);
		pizq.lineTo(400,400);
		pizq.lineWidth=6;
		pizq.stroke();
		break;

		case 7:
		var pderecho = document.getElementById("pderecho");
		var pder = pderecho.getContext("2d");
		pder.moveTo(300,0);
		pder.lineTo(-100,400);
		pder.lineWidth=6;
		pder.stroke();
		break;

	}
}















