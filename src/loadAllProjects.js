function loadAllProjects(projects) {
    const table = document.createElement('table');

    const tableHead = document.createElement('thead');
    const nameHeading = document.createElement('th');
    nameHeading.textContent = 'Project Name';
    tableHead.appendChild(nameHeading);
    table.appendChild(tableHead);


    const tableBody = document.createElement('tbody');
    for (let i = 0; i < projects.length; i++) {
        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        nameCell.textContent = projects[i].name;
        row.appendChild(nameCell);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    return table;
}

export {loadAllProjects};