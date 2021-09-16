$(document).ready(function () {

	var colaboradores = $('#apoyo');
	var marginL = "-" + ($('#apoyo .colaborador:first').width() + 50).toString() + "px";

	function desfilar() {
		colaboradores.animate({
			marginLeft: marginL
		},1000,function() {
			$('#apoyo .colaborador:first').insertAfter('#apoyo .colaborador:last');
        	colaboradores.css('margin-left', '0px');
		});
	}

	setInterval(desfilar,500);
});