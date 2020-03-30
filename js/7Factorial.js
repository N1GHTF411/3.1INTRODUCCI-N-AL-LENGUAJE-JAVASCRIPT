window.onload = function(){
    document.querySelector(".boton").addEventListener("click",function(){
            var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
         var resultado = 1;
 
         for(var i=1; i<=numero; i++) {
               resultado *= i;
         }
         document.write("<STYLE>@import url(css/EstiloBoton.css);</STYLE><h2 class=\"Fact\">"+resultado+"</h2>");
    },false);
 };