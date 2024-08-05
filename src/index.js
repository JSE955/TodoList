import { createTodo } from "./Todo";
import { createProject } from "./Project";
import { loadAllProjects } from "./loadAllProjects";
import './style.css';

const content = document.querySelector('.content');

const projects = [];

function addNewProject(project) {
    projects.push(project);
}

addNewProject(createProject('Default'));
addNewProject(createProject('Work Tasks'));

content.appendChild(loadAllProjects(projects));