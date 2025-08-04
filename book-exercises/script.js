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

const heading = document.getElementById("heading");
const heading2 = document.querySelector("#heading");
console.log(heading === heading2);
document.title = "Nowa nazwa strony";

// const ul = document.querySelector(".word-list");
// const sentence = document.querySelector(".sentence");
// ul.addEventListener("click", (e) => {
// 	const word = e.target.textContent;
// 	console.log(e);
// 	sentence.textContent += word;
// 	sentence.textContent += " ";
// });

const root = document.documentElement;

// let hasCreatedBox = false;

// document.body.addEventListener("mousemove", (e) => {
// 	if (!hasCreatedBox) {
// 		const box = document.createElement("div");
// 		box.classList.add("box");
// 		document.body.append(box);
// 		hasCreatedBox = true;
// 	}

// 	const positionX = e.clientX + 'px';
// 	const positionY = e.clientY + 'px';

// 	root.style.setProperty('--position-x', positionX)
// 	root.style.setProperty('--position-y', positionY)
// });

let posX = 0;
let posY = 0;
document.body.addEventListener("keydown", (e) => {
	if (e.key === "w") {
		posY -= 5;
	} else if (e.key === "a") {
		posX -= 5;
	} else if (e.key === "s") {
		posY += 5;
	} else if (e.key === "d") {
		posX += 5;
	}
	console.log(e);
	root.style.setProperty("--posY", posY + "px");
	root.style.setProperty("--posX", posX + "px");
});
