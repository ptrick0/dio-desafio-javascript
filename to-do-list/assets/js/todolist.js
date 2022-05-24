let todolistWrapper = document.getElementById("todolist"); 
let todoInputWrapper = document.getElementById("tarefa");
let checkCounter = 0;

document.getElementById("adicionar").addEventListener("click", () => {
    let todoInputText = todoInputWrapper.value;
    let newListElement = document.createElement("li");

    let checkboxElement = document.createElement("input");
    Object.assign(checkboxElement, {type: "checkbox", id: "check"+checkCounter.toString()});

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "check"+checkCounter.toString());
    labelElement.appendChild(document.createTextNode(todoInputText));

    newListElement.appendChild(checkboxElement);
    newListElement.appendChild(labelElement);

    todolistWrapper.insertAdjacentElement("afterbegin", newListElement);

    checkCounter++;
});