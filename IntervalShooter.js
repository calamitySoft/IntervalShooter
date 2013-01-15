Crafty.audio.add("C4", "C4.wav");
Crafty.audio.add("C#4", "Csharp4.wav");
Crafty.audio.add("D4", "D4.wav");
Crafty.audio.add("D#4", "Dsharp4.wav");
Crafty.audio.add("E4", "E4.wav");
Crafty.audio.add("F4", "F4.wav");
Crafty.audio.add("F#4", "Fsharp4.wav");
Crafty.audio.add("G4", "G4.wav");
Crafty.audio.add("G#4", "Gsharp4.wav");
Crafty.audio.add("A5", "A5.wav");
Crafty.audio.add("A#5", "Asharp5.wav");
Crafty.audio.add("B5", "B5.wav");
Crafty.audio.add("C5", "C5.wav");

window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	Crafty.background("#000000");

	Crafty.scene("gameplay", function() {
	Crafty.e("Player")
		.attr({x: 500, y: 300, w: 100, h: 40});

	var frameCounter = 0;

	var enemyManager = Crafty.e("2D");
	
	enemyManager.bind("EnterFrame", function() {
		frameCounter++;
		if(frameCounter == 20)
			{
			frameCounter = 0;
			if(Crafty.math.randomInt(0,10) < 6) {
				var temp = Crafty.e("Enemy").attr({x: 1000, y: Crafty.math.randomInt(0, 600), w: 100, h: 40});
				if(temp.y < 75)
				{temp.audio = "C5"; // major 7th
				}
				else if(temp.y < 150 && temp.y >= 75)
				{temp.audio = "B5"; //major 7th
				}
				else if(temp.y < 225 && temp.y >= 150)
				{temp.audio = "A5" //minor 7th
				}
				else if(temp.y < 300 && temp.y >= 225)
				{temp.audio = "G4"; // major 6th
				}
				else if(temp.y < 375 && temp.y >= 300)
				{temp.audio = "F4"; // minor 6th
				}
				else if(temp.y < 450 && temp.y >= 375)
				{temp.audio = "E4" // perfect 5th
				}
				else if(temp.y < 525 && temp.y >= 450)
				{temp.audio = "D4" // diminished 5th
				}
				else if(temp.y < 600 && temp.y >= 525)
				{temp.audio = "C4"; //perfect 4th
				}
			}
			}
		});
	});

	Crafty.scene("gameOver", function() {
		var textHandler = Crafty.e("2D,DOM,Text,Keyboard").attr({x: 500, y:300}).text("Press 'r' to restart").textColor("#FF0000");
		textHandler.bind("KeyDown", function() {
			if(this.isDown('R')) {
				Crafty.scene("gameplay"); }
			});
		});

	Crafty.scene("gameplay");

});
