$(document).ready(function () {
	$("#showHideFacts").click(function () {
		$("dd").slideToggle("invisible");
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

$("#smokeyBear").click(function () {
	onlyYou.play()
})


var konamieCode = {

	konami: function () {
		var konamikeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
			started = false,
			count = 0;

		$(document).keydown(function (e) {
			var reset = function () {
				started = false;
				count = 0;
				return;
			};

			var key = e.keyCode;
			if (!started) {
				if (key == 38) {
					started = true;
				}
			}
			if (started) {
				if (konamikeys[count] == key) {
					count++;
				} else {
					// Incorrect key, restart.
					reset();
				}
				if (count == 11) {
					// Success!
					onlyYou.play();


					reset();
				}
			} else {
				reset();
			}
		});
	}
};

konamieCode.konami();
