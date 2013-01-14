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
				var temp =	Crafty.e("Enemy")
							.attr({x: 1000, y: Crafty.math.randomInt(0, 600), w: 100, h: 40});
				if(temp.y < 50)
				{
					//temp.audio = // octave
				}
				else if(temp.y < 100 && >= 50)
				{
					//temp.audio = //major 7th
				}
				else if(temp.y < 150 && >= 100)
				{
					//temp.audio = //minor 7th
				}
				else if(temp.y < 200 && >= 150)
				{
					//temp.audio = // major 6th
				}
				else if(temp.y < 250 && >= 200)
				{
					//temp.audio = //minor 6th
				}
				else if(temp.y < 300 && >= 250)
				{
					//temp.audio = // perfect 5th
				}
				else if(temp.y < 350 && >= 300)
				{
					//temp.audio = // diminished 5th
				}
				else if(temp.y < 400 && >= 350
				{
					//temp.audio = //perfect 4th
				}
				else if(temp.y < 450 && >= 400
				{
					//temp.audio = //major 3rd
				}
				else if(temp.y < 500 && >= 450
				{
					//temp.audio = //minor 3rd
				}
				else if(temp.y < 550 && >= 500
				{
					//temp.audio = //major 2nd
				}
				else 
				{
					//temp.audio = //minor 2nd
				}
				
			}
		});

	/*var scoreTicker = Crafty.e("2D, Cavas, SpriteText")
				.attr({x: 20, y: 20, w: 8 * 10, h: 8});

	Crafty.load("angelsb.png");
	scoreTicker.registerFont("angelsb", 8, "angelsb.png", "ABCDEFGHIJKLMNOPQRSTUVWXYZ&1234567890!?.");
	scoreTicker.text("Score:");*/
});
