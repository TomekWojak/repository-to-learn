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
const player2 = new Player(0, 0);

player1.move(3, 3);
player2.move(5, 5);

console.log(player1, player2);
