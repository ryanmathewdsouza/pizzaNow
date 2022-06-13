import * as bootstrap from 'bootstrap';

let pestoAdd = document.getElementById("pesto-add");
pestoAdd.onclick = addPesto;

function addPesto() {
    // alert("You have selected a " + document.getElementById("grilled-vegi-pesto-size").value + " sized Grilled Vegi Pesto pizza");
    var table = document.getElementById("basket-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("grilled-vegi-pesto-size").value;
    cell2.innerHTML = document.getElementById("grilled-vegi-pesto-crust").value;
    cell3.innerHTML = "Grilled Vegi Pesto Pizza";
}

let bangerAdd = document.getElementById("banger-add");
bangerAdd.onclick = addBanger;

function addBanger() {
    // alert("You have selected a " + document.getElementById("grilled-vegi-pesto-size").value + " sized Grilled Vegi Pesto pizza");
    var table = document.getElementById("basket-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("absolute-banger-size").value;
    cell2.innerHTML = document.getElementById("absolute-banger-crust").value;
    cell3.innerHTML = "Absolute Banger Pizza";
}

// commented out code triggers a custom function, replaced this for bootstrap modal code
// function addItem() {
//     alert ("Item added to order");
// }
// document.getElementsByClassName()
// make sure to use getElementById(), not getElementsByClassName()
// const plus = document.getElementById("plus");
// make sure to reference the addItem function by omitting the brackets, including them will call the function as it's read'
// plus.onclick = addItem;