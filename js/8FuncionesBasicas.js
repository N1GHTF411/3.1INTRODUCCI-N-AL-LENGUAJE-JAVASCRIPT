window.onload = function(){
	document.querySelector(".boton").addEventListener("click",function(){
		var numero = document.querySelector("#caja").value;

          var resultado = parImpar(numero);
          alert("El número "+numero+" es "+resultado);
	},false);

	function parImpar(numero) {
            if(numero % 2 == 0)   return "par";
            else   return "impar";
            }
};	