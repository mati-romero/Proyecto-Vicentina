$(document).ready(function() {

	var Egresados = $('#Egresados');
	var Ninos = $('#Ninos');
	var Familias = $('#Familias');
	var Vacunacion = $('#Vacunacion');
	var Alimentos = $('#Alimentos');

	function incrementarContador(objContador) {

		var maxValueobjContador = parseInt(objContador.attr("data-target"));
		var contador = parseInt(objContador.attr("data-init"));

		if(contador < maxValueobjContador) {
			contador = contador + 1;
			objContador.attr("data-init",contador);
			objContador.html("+" + contador);
		}
	}

	$(window).on('scroll', function () {

   		var acercaDeOffsetTop = $('#Nosotros').offset().top;

		if ($(window).scrollTop() >= acercaDeOffsetTop - 132) {
			setInterval(incrementarContador,50,Egresados);
			setInterval(incrementarContador,50,Ninos);
			setInterval(incrementarContador,50,Familias);
			setInterval(incrementarContador,50,Vacunacion);
			setInterval(incrementarContador,50,Alimentos);
	    }

  	})
	
});