window.onload = function(){
	var numero1 = 5;
	var numero2 = 8;

	document.querySelector("#boton1").addEventListener("click",function(){
		if(numero1 <= numero2) {
  			alert("numero1 no es mayor que numero2");
		}	
	},false);
	
	document.querySelector("#boton2").addEventListener("click",function(){
		if(numero2 >= 0) {
  			alert("numero2 es positivo");
		}
	},false);

	document.querySelector("#boton3").addEventListener("click",function(){
		if(numero1 < 0 || numero1 != 0) {
  			alert("numero1 es negativo o distinto de cero");
		}	
   },false);
	
	document.querySelector("#boton4").addEventListener("click",function(){
		if(++numero1 < numero2) {
  			alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
		}
   },false);
	
};