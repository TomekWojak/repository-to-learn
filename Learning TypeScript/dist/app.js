const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector("button");
const addValues = (x1, x2) => x1 + x2;
button?.addEventListener("click", () => {
    const sum = addValues(parseFloat(input1.value), parseFloat(input2.value));
    console.log(sum);
});
export {};
