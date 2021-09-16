$(document).ready(function () {

	var colaboradores = $('#colaboradores');
	var marginL = "-" + ($('#colaboradores .colaborador:first').width() + 50).toString() + "px";

	function desfilar() {
		colaboradores.animate({
			marginLeft: marginL
		},1000,function() {
			$('#colaboradores .colaborador:first').insertAfter('#colaboradores .colaborador:last');
        	colaboradores.css('margin-left', '0px');
		});
	}

	setInterval(desfilar,500);
});