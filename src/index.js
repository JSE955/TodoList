import { createTodo } from "./Todo";
import { createProject } from "./Project";
import { loadAllProjects } from "./loadAllProjects";
import './style.css';

const body = document.querySelector('body');

const projects = [];

function addNewProject(project) {
    projects.push(project);
}

addNewProject(createProject('Default'));
addNewProject(createProject('Work Tasks'));

body.appendChild(loadAllProjects(projects));