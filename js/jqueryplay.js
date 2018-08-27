$(function() {


	$("#btn1").click(function () {
		$("#panel1").slideUp(1000).delay(2500).slideDown(2500);
		$("#panel2").slideUp(1500).delay(2000).slideDown(2000);
		$("#panel3").slideUp(2000).delay(1500).slideDown(1500);
		$("#panel4").slideUp(2500).delay(1000).slideDown(1000);
	});

	$("#btn2").click(function () {
			$("#panel1").delay(100).fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast');
			$("#panel2").delay(100).fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast');
			$("#panel3").delay(100).fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast');
			$("#panel4").delay(100).fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast').fadeOut("fast").fadeIn('fast');
	});

	$("#btn3").click(function() {
		$("#panel1").css({"background-color": "green", "color": "white"});
		$("#panel2").css({"background-color": "blue", "color": "white"});
		$("#panel3").css({"background-color": "red", "color": "white"});
		$("#panel4").css({"background-color": "purple", "color": "white"});
	});

	$("#btn4").click((function() {
		var $elie = $("#panel1, #panel2, #panel3, #panel4"), degree = 0, timer;
		rotate();

		function rotate() {

			$elie.css({WebkitTransform: 'rotate(' + degree + 'deg)'});
			$elie.css({'-moz-transform': 'rotate(' + degree + 'deg)'});
			timer = setTimeout(function () {
				++degree;
				rotate();
			}, 2);
		clearTimeout(1500);
		}


}))});