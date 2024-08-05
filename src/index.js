import { createTodo } from "./Todo";
import { createProject } from "./Project";

let myTodo = createTodo('test', 'test description', Date.now(), 1);
let myProject = createProject('default');
myProject.addTodo(myTodo);
console.log(myProject.getTodos());