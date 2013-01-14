Crafty.c("Player", {
	init: function() {
		this.addComponent("2D,Canvas,Color,Fourway,Keyboard,Collision");
		this.color("#0000FF");
		this.fourway(10);
		}
	});

Crafty.c("Enemy", {
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision");
		this.color("#FF0000");
		}
	});
