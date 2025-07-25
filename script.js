class Player {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
}

const player1 = new Player(0, 0);
console.log(player1.move(10, 10));
console.log(player1);
