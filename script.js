class Actor {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
	distanceTo(otherPlayer) {
		let dx = otherPlayer.x - this.x;
		let dy = otherPlayer.y - this.y;
		return Math.hypot(dx, dy);
	}
}

class Player extends Actor {
	constructor(startX, startY) {
		super(startX, startY);
	}
}
const player1 = new Player(0, 0);
console.log(player1);
