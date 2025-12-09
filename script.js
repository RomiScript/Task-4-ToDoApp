//Elementos del DOM
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsList = document.getElementById("todos-list");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const deleteElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");

let todos = []
let currentFilter = "all";

addTaskBtn.addEventListener("click", () => {
    addTodo(taskInput.value);
})
taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTodo(taskInput.value);
    }
});
clearCompletedBtn.addEventListener("click",clearCompleted)

function addTodo(text){
    if(text.trim() === "") return


    const todo = {
        id: Date.now(),
        text,
        completed:false
    }
    todos.push(todo)

    saveTodos()
    renderTodos()
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
    updateItemsCounts()
    checkEmptyStates()
}

function updateItemsCounts(){
    const uncompletedTodos = todos.filter(todo => !todo.completed)
    itemsLeft.textContent = `${uncompletedTodos.length}`
}

function checkEmptyStates(){}

function clearCompleted() {}