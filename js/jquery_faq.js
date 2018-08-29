$(document).ready(function () {
	$("#showHideFacts").click(function () {
		$("dd").toggleClass("invisible");
	});

});


$("#liBackgroundColor").click(function () {
	$("li").css('background-color', '#8f261e');
});


$("h3").click(function () {
	$("li").css('font-weight', 'bold');
});

$("li").click(function () {
	$(this).parent().children().first().css('color', 'blue');
});


