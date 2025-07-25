class Player {
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

const player1 = new Player(0, 0);
const player2 = new Player(0, 0);
player1.move(10, 10);
player2.move(15, 12);

console.log(player1);
console.log(player2);

