import * as bootstrap from 'bootstrap';

let pestoAdd = document.getElementById("pesto-add");
pestoAdd.onclick = addPesto;

function addPesto() {
    // trying to grab table using const table = $("basket-table"); doesn't work
    let table = document.getElementById("basket-table");
    let values = document.getElementById("grilled-vegi-pesto-size");
    let feedArray = values.value.split(",");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = feedArray[0];
    cell2.innerHTML = document.getElementById("grilled-vegi-pesto-crust").value;
    cell3.innerHTML = feedArray[1];
    cell4.innerHTML = feedArray[2];
}

let bangerAdd = document.getElementById("banger-add");
bangerAdd.onclick = addBanger;

function addBanger() {
    let table = document.getElementById("basket-table");
    let values = document.getElementById("absolute-banger-size");
    let feedArray = values.value.split(",");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = feedArray[0];
    cell2.innerHTML = document.getElementById("absolute-banger-crust").value;
    cell3.innerHTML = feedArray[1];
    cell4.innerHTML = feedArray[2];
}

let theCheeseburgerAdd = document.getElementById("the-cheeseburger-add");
theCheeseburgerAdd.onclick = addTheCheeseburger;

function addTheCheeseburger() {
    let table = document.getElementById("basket-table");
    let values = document.getElementById("the-cheeseburger-size");
    let feedArray = values.value.split(",");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = feedArray[0];
    cell2.innerHTML = document.getElementById("the-cheeseburger-crust").value;
    cell3.innerHTML = feedArray[1];
    cell4.innerHTML = feedArray[2];
}

let theMeatfielderAdd = document.getElementById("the-meatfielder-add");
theMeatfielderAdd.onclick = addTheMeatfielder;

function addTheMeatfielder() {
    let table = document.getElementById("basket-table");
    let values = document.getElementById("the-meatfielder-size");
    let feedArray = values.value.split(",");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = feedArray[0];
    cell2.innerHTML = document.getElementById("the-meatfielder-crust").value;
    cell3.innerHTML = feedArray[1];
    cell4.innerHTML = feedArray[2];
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