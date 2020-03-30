window.onload = function(){
	function muestraOculta(id) {
	  var elemento = document.getElementById('contenidos_'+id);
	  var enlace = document.getElementById('enlace_'+id);

	  if(elemento.style.display == "" || elemento.style.display == "block") {
	    elemento.style.display = "none";
	    enlace.innerHTML = 'Mostrar contenidos';
	  }
	  else {
	    elemento.style.display = "block";
	    enlace.innerHTML = 'Ocultar contenidos';
	  }
	}

	document.querySelector("#enlace_1").addEventListener("click",function(){
		muestraOculta('1');
	},false);

	document.querySelector("#enlace_2").addEventListener("click",function(){
		muestraOculta('2');
	},false);

	document.querySelector("#enlace_3").addEventListener("click",function(){
		muestraOculta('3');
	},false);
};