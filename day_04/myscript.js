const todos = [];

let globalID = 0;

function getId() {
    return ++globalID;
}

function addTodo(newTodo) {
    todoList.push({ id: getId(), title: newTodo, isComplete: false });
}
function removeTodo(todoId) {
    arr.splice(todoId, 1)
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
        throw new Error('Id not found');
    }
    todos.splice(index, 1)
}
function changeTodoTitle(todoId, newTitle) {
    arr[todoId].title = newTitle;
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index !== -1) {
        throw new Error('Id not found');
    }
    todos[index].title = newTitle;

}
function changeTodoStatus(todoId, isComplete) {
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos[index].status = isComplete;
}