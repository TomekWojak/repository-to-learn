class Actor {
	constructor(startX, startY) {
		(this.x = startX), (this.y = startY);
	}

	move(dx, dy) {
		this.x += dx;
		this.y += dy;
	}

	distanceTo(otherPlayer) {
		let dx = this.x - otherPlayer.x;
		let dy = this.y - otherPlayer.y;
		return Math.hypot(dx, dy);
	}
}

class Player extends Actor {
	constructor(startX, startY) {
		super(startX, startY);
		this.hp = 100;
	}
}

class Enemy extends Actor {
	attack(player) {
		if (this.distanceTo(player) < 4) {
			player.hp -= 10;
			return true;
		} else {
			return false;
		}
	}
}

class Follower extends Actor {
	constructor(startX, startY, player) {
		super(startX, startY);
		this.player = player;
	}
	follow() {
		this.x = this.player.x;
		this.y = this.player.y;
	}
}

const player = new Player(10, 2);
const enemy = new Enemy(1, 2);
const follower = new Follower(0, 0, player);
follower.follow();
