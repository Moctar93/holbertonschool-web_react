// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from '../interface';

// Define the type declarations for each function in crud.js
declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}

