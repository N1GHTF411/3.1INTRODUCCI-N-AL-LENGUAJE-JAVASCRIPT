window.onload = function(){
    document.querySelector(".boton").addEventListener("click",function(){
        // Al cargarse el archivo JavaScript, se muestra un mensaje
        alert("Hola Mundo!");

        // Despues del primer mensaje, se muestra otro mensaje seguido
        alert("Soy el primer script");
    },false);	
}

