const tasksContainer = document.querySelector("ul");
const button = [...document.querySelectorAll("button")].find(
	(btn) => btn.textContent === "Add"
);
const input = document.querySelector<HTMLInputElement>("#name");

const tasks: { name: string; done: boolean }[] = [
	{ name: "Wyrzucić śmieci", done: false },
	{ name: "Pójść na siłownię", done: true },
	{ name: "Zrobić zakupy", done: false },
];

const task = { name: "Wyrzucić śmieci", done: false };

const giveClassName = (el: Element, classes: string[]) => {
	classes.forEach((cls: string) => {
		el.classList.add(cls);
	});
};

const renderTasks = () => {
	tasks.forEach((task, id) => {
		const taskEl = document.createElement("li");
		const label: HTMLLabelElement = document.createElement("label");
		const input: HTMLInputElement = document.createElement("input");

		label.setAttribute("for", `task-${id}`);
		input.type = "checkbox";
		input.id = `task-${id}`;
		label.textContent = task.name;
		input.checked = task.done;

		giveClassName(taskEl, ["text-white", "block", "my-2"]);
		giveClassName(input, ["align-middle", "inline-block", "ml-2"]);

		taskEl.append(label, input);
		tasksContainer?.append(taskEl);

		input.addEventListener("change", () => {
			task.done = !task.done;
		});
	});
};

const addTask = (task: string) => {
	tasksContainer && (tasksContainer.innerHTML = "");
	tasks.push({ name: task, done: false });
};

button?.addEventListener("click", (e) => {
	e.preventDefault();

	if (input) {
		addTask(input.value);
		renderTasks();
	}
});

renderTasks();
