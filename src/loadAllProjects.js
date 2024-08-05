import { addNewProject } from ".";

function loadAllProjects(projects) {
    const content = document.createElement('div');

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add New Project';
    addProjectButton.setAttribute('type', 'button');
    addProjectButton.addEventListener('click', () => {
        let projectName = prompt('Enter new project name: ');
        addNewProject(projectName);
    })

    content.appendChild(addProjectButton);

    const table = document.createElement('table');

    const tableHead = document.createElement('thead');
    const nameHeading = document.createElement('th');
    nameHeading.textContent = 'Project Name';
    const editHeading = document.createElement('th');
    editHeading.textContent = 'Edit Project Details';
    const viewHeading = document.createElement('th');
    viewHeading.textContent = 'View Project Todos';

    tableHead.appendChild(nameHeading);
    tableHead.appendChild(editHeading);
    tableHead.appendChild(viewHeading);
    table.appendChild(tableHead);


    const tableBody = document.createElement('tbody');
    for (let i = 0; i < projects.length; i++) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        nameCell.textContent = projects[i].name;

        let editCell = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit Details';
        editButton.setAttribute('type', 'button');
        editCell.appendChild(editButton);

        let viewCell = document.createElement('td');
        let viewButton = document.createElement('button');
        viewButton.textContent = 'View Todos';
        viewButton.setAttribute('type', 'button');
        viewCell.appendChild(viewButton);

        row.appendChild(nameCell);
        row.appendChild(editCell);
        row.appendChild(viewCell);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    content.appendChild(table);
    return content;
}

export {loadAllProjects};