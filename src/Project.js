function createProject(name) {
    let todos = [];
    const addTodo = todo => todos.push(todo);
    const getTodos = () => todos;
    return { name, addTodo, getTodos };
}

export { createProject };