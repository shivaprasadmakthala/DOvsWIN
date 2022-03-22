"use strict";

// add data from the form

document.getElementById("add").addEventListener("click", function(){
    let food_name = document.getElementById("food_name");
    let country_of_origin = document.getElementById("country_of_origin");
    let table = document.getElementById("table_information");


 //add rows to the table
 let rowCount = table.rows.length; // calculate the row number 
 let row = table.insertRow(rowCount); // insert the rows into the table
 
 // add columns to the table
 row.insertCell(0).innerHTML = food_name.value;
 row.insertCell(1).innerHTML = country_of_origin.value;
});