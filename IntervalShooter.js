window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	Crafty.background("#000000");

	Crafty.e("Player")
		.attr({x: 500, y: 300, w: 100, h: 40});

	Crafty.e("Enemy")
		.attr({x: 700, y: 300, w: 100, h:40});

});
