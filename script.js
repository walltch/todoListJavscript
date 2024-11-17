const todoList = [];
function addTodo() {
    const todoItem = document.body.querySelector('#todoInput');
    const todoItemValue = todoItem.value;
    todoList.push(todoItemValue);
    todoItem.value = '';
    displayTodo(todoList);
}

function displayTodo(todoTable) {
    const todoListElement = document.body.querySelector('#todoList');
    todoListElement.innerHTML = '';
    for (let i = 0; i < todoTable.length;
        i++) {
        const todoItem = todoTable[i];
        todoListElement.innerHTML += `
            <li>${todoItem}
                <button onclick="deleteTodo(${i})">Delete</
            </li>
            `;
    }

}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodo(todoList);
}