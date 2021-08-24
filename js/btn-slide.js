$(document).ready(function () {

	$(".btn-slide").on('click',function () {
		
		var obj = $("#" + $(this).attr("data-obj"));

		obj.slideToggle(1000);
	});
});