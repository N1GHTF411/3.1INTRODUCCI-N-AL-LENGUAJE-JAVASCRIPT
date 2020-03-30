window.onload = function(){
	var valores = [true, 5, false, "hola", "adios", 2];

	// Cual de los 2 elementos de texto es mayor
	// Si el resultado es true, el primer texto es mayor
    
    document.querySelector("#boton1").addEventListener("click",function(){
    	var resultado = valores[3] > valores[4];
		alert(resultado);	
    },false);

    document.querySelector("#boton2").addEventListener("click",function(){
    	// Combinar valores booleanos
		var valor1 = valores[0];
		var valor2 = valores[2];

		// Obtener un resultado TRUE
		var resultado = valor1 || valor2;
		alert(resultado);	
    },false);
	
	

    document.querySelector("#boton3").addEventListener("click",function(){
    	// Combinar valores booleanos
		var valor1 = valores[0];
		var valor2 = valores[2];

		// Obtener un resultado FALSE
		resultado = valor1 && valor2;
		alert(resultado);
    },false);
	
	document.querySelector("#boton4").addEventListener("click",function(){
    	// Operaciones matemáticas
		var num1 = valores[1];
		var num2 = valores[5];

		var suma = num1 + num2;
		alert(suma);
    },false);

    document.querySelector("#boton5").addEventListener("click",function(){
    	// Operaciones matemáticas
		var num1 = valores[1];
		var num2 = valores[5];

		var resta = num1 - num2;
		alert(resta);
    },false);
	
	document.querySelector("#boton6").addEventListener("click",function(){
    	// Operaciones matemáticas
		var num1 = valores[1];
		var num2 = valores[5];

		var multiplicacion = num1 * num2;
	    alert(multiplicacion);

    },false);

    document.querySelector("#boton7").addEventListener("click",function(){
    	// Operaciones matemáticas
		var num1 = valores[1];
		var num2 = valores[5];

		var division = num1 / num2;
	    alert(division);

    },false);
	

	document.querySelector("#boton8").addEventListener("click",function(){
    	// Operaciones matemáticas
		var num1 = valores[1];
		var num2 = valores[5];

		var modulo = num1 % num2;
	    alert(modulo);

    },false);

};