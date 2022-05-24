let currentNumberWrapper = document.getElementById("contador");
let currentNumber = 0;

document.getElementById("diminuir").addEventListener("click", () => {
    currentNumber = currentNumber - 1;
    updateCounterDOM();
});

document.getElementById("aumentar").addEventListener("click", () => {
    currentNumber = currentNumber + 1;
    updateCounterDOM();
});

function updateCounterDOM() {
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.classList.add("negative");
    } else {
        currentNumberWrapper.classList.remove("negative");
    }
}