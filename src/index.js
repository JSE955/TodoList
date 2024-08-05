import { createTodo } from "./Todo";
import { createProject } from "./Project";
import './style.css';

const projects = [];

function addNewProject(project) {
    projects.push(project);
}



addNewProject(createProject('Default'));
console.log(projects);