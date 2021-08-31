$(document).ready(function() {
	$(".btn-compartir").on('click',function() {

		var associated =  $('#'+ $(".btn-compartir").attr('associated'));
		associated.fadeToggle("1000")
	});
});