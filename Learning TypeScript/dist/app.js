const tasksContainer = document.querySelector("ul");
const button = [...document.querySelectorAll("button")].find((btn) => btn.textContent === "Add");
const input = document.querySelector("#name");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { title: "Wyrzucić śmieci", done: false, category: "general" },
    { title: "Pójść na siłownię", done: true },
    { title: "Zrobić zakupy", done: false, category: "general" },
];
const giveClassName = (el, classes) => {
    classes.forEach((cls) => {
        if (cls) {
            el.classList.add(cls);
        }
    });
};
const renderTasks = () => {
    tasks.forEach((task, id) => {
        const taskEl = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.setAttribute("for", `task-${id}`);
        input.type = "checkbox";
        input.id = `task-${id}`;
        label.textContent = task.title;
        input.checked = task.done;
        giveClassName(taskEl, [
            "text-white",
            "block",
            "my-2",
            `${task.category ? task.category : ""}`,
        ]);
        giveClassName(input, ["align-middle", "inline-block", "ml-2"]);
        taskEl.append(label, input);
        tasksContainer?.append(taskEl);
        input.addEventListener("change", () => {
            task.done = !task.done;
        });
    });
};
const addTask = (task) => {
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
export {};
