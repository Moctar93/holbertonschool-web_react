/// <reference path="./crud.d.ts" />

// Import the necessary types from interface.ts
import { RowID, RowElement } from '../interface';
// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert a row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Create an updatedRow object with an age property
const updatedRow: RowElement = { 
    firstName: 'Mocti', 
    lastName: 'Net', 
    age: 93 
};

// Update the row with newRowID
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Delete the row using newRowID
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);

