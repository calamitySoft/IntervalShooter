window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	Crafty.background("#000000");

	Crafty.e("Player")
		.attr({x: 500, y: 300, w: 100, h: 40});

	var frameCounter = 0;
	
	Crafty.bind("EnterFrame", function() {
		frameCounter++;
		if(frameCounter == 20)
			{
			frameCounter = 0;
			if(Crafty.math.randomInt(0,10) < 6)
				Crafty.e("Enemy")
					.attr({x: 1000, y: Crafty.math.randomInt(0, 600), w: 100, h: 40});
			}
		});
});
