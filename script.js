class Actor {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}
}

class Player extends Actor {
	constructor(startX, startY, nickname) {
		super(startX, startY);
		this.nickname = nickname;
	}
	introduce() {
		return `Cześć, jestem ${this.nickname} i stoję na pozycji (x: ${this.x}, y: ${this.y})`;
	}
}

const test = new Player(0, 0, "Bartek");
test.move(30, 14);

console.log(test.introduce());
