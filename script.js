class Actor {
	constructor(startX, startY) {
		(this.x = startX), (this.y = startY);
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	distanceTo(otherPlayer) {
		let dx = otherPlayer.x - this.x;
		let dy = otherPlayer.y - this.y;
	}
}

class PLayer extends Actor {
	constructor(startX, startY) {
		super(startX, startY);
		this.hp = 100
	}
}
