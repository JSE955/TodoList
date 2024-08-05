import { createTodo } from "./Todo";

let myTodo = createTodo('test', 'test description', Date.now(), 1);
myTodo.title = 'hello';
console.log(myTodo);