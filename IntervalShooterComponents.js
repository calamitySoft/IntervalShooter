PROJECTILE_TRAVEL_SPEED = 5;

Crafty.c("Player", {
	init: function() {
		this.addComponent("2D,Canvas,Color,Fourway,Keyboard,Collision");
		this.color("#0000FF");
		this.fourway(10);
		this.bind("KeyDown", function() {
			if(this.isDown('Q'))
				{
				Crafty.e("Projectile")
					.attr({x: this.x + this.w, y: this.y, w: 40, h: 40});
				}
		});
		}
	});

Crafty.c("Enemy", {
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision");
		this.color("#FF0000");
		this.collision();
		this.onHit("Projectile", function() {
			this.destroy();
			});
		}
	});

Crafty.c("Projectile", {
	interval: null,
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision");
		this.color("#00FF00");
		this.collision();
		this.bind("EnterFrame", function() {
			this.x += PROJECTILE_TRAVEL_SPEED;
			});
		}
	});
