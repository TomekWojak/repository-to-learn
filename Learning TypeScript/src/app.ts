const tasksContainer = document.querySelector("ul");
const button = [...document.querySelectorAll("button")].find(
	(btn) => btn.textContent === "Add"
);
const input = document.querySelector<HTMLInputElement>("#name");

interface Task {
	title: string;
	done: boolean;
}

const tasks: Task[] = [
	{ title: "Wyrzucić śmieci", done: false },
	{ title: "Pójść na siłownię", done: true },
	{ title: "Zrobić zakupy", done: false },
];

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
		label.textContent = task.title;
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

const addTask = (task: Task) => {
	tasksContainer && (tasksContainer.innerHTML = "");
	tasks.push(task);
};

button?.addEventListener("click", (e) => {
	e.preventDefault();

	if (input) {
		addTask({ title: input.value, done: false });
		renderTasks();
	}
});

renderTasks();
