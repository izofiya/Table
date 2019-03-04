
import orders from '../data/orders.JSON';
import { createTable, createContentTable } from './functions.js';

export default (function () { 
    let app = document.getElementById('app');  
    let table = createTable();
    let tbody = createContentTable(2, orders);
   
    app.appendChild(table);
    table.appendChild(tbody);
}());