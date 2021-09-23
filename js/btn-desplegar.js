$(document).ready(function () {

	$(".boton-desplegar").on('click',function () {
		
		var sw = parseInt($(this).attr("data-sw"));
		var ventana = $($(this).attr("data-v"));

		if(sw == 0) {
			$(this).empty();
			var contenido = '<a href="">Formulario&nbsp;&nbsp;&nbsp;<i class="fas fa-angle-down"></i></a>';
			$(this).html(contenido);
			$(this).attr("data-sw","1");
			ventana.slideDown(1000);
		}
		else {
			$(this).empty();
			var contenido = '<a href="">Formulario&nbsp;&nbsp;&nbsp;<i class="fas fa-angle-up"></i></a>';
			$(this).html(contenido);
			$(this).attr("data-sw","0");
			ventana.slideUp(1000);
		}
	});

	$(".boton-desplegar-noticias").on('click',function () {
		
		var sw = parseInt($(this).attr("data-sw"));
		var ventana = $($(this).attr("data-v"));

		if(sw == 0) {
			$(this).empty();
			var contenido = '<a href="">Ver más noticias&nbsp;&nbsp;&nbsp;<i class="fas fa-angle-down"></i></a>';
			$(this).html(contenido);
			$(this).attr("data-sw","1");
			ventana.slideDown(1000);
		}
		else {
			$(this).empty();
			var contenido = '<a href="">Ver más noticias&nbsp;&nbsp;&nbsp;<i class="fas fa-angle-up"></i></a>';
			$(this).html(contenido);
			$(this).attr("data-sw","0");
			ventana.slideUp(1000);
		}
	});
});