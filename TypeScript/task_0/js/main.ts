// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// 2. Create two student objects
const student1: Student = {
    firstName: 'LOIC',
    lastName: 'Assael',
    age: 23,
    location: 'DUBAI',
};

const student2: Student = {
    firstName: 'Jordy',
    lastName: 'Moukiana',
    age: 27,
    location: 'MIAMI',
};

// 3. Store the students in an array
const studentsList: Student[] = [student1, student2];

// 4. Render the table
const body = document.querySelector('body');
const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableBody = document.createElement('tbody');

// Create table headers
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// Create rows for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

// Append the table body and table to the document
table.appendChild(tableBody);
if (body) {
    body.appendChild(table);
}

