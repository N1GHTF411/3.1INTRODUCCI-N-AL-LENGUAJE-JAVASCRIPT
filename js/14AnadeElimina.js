window.onload = function(){
	function agregaLinea(){
			var oTbl = document.getElementById("tblUno");
			var oLin = oTbl.insertRow(-1);
			var oCelda1 = oLin.insertCell(0);
			var oCelda2 = oLin.insertCell(1);

			oCelda1.innerHTML = "Celda";
			oCelda2.innerHTML = 'Texto y campo ' +
			'<input type="text" name="campo"/>';
		}

		function eliminaLinea(){
			var oTbl = document.getElementById("tblUno");
			oTbl.deleteRow(1);
		}

		document.querySelector("#agrega").addEventListener("click",function(){
			agregaLinea();
		},false);

		document.querySelector("#elimina").addEventListener("click",function(){
			eliminaLinea();
		},false);
};