import * as bootstrap from 'bootstrap';
import button from "bootstrap/js/src/button";
// importing alert, as shown below, stops the alerts from working
// import alert from "bootstrap/js/src/alert";

// run sumPrices(), to calculate basket total, every second
// setInterval(function() { updateBasketTotal(); }, 1000);

// calculate basket total
function updateBasketTotal() {
    let table = document.getElementById("basket-table");
    let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
        return total + parseFloat(row.cells[3].innerHTML.replace('£', ''));
    }, 0);
    document.getElementById("totalPrice").innerHTML = "Total price for basket £" + subTotal.toFixed(2);
}

// add event listeners to pizza add item buttons, to add pizza to basket
let addPizzaButtons = document.getElementsByClassName("pizza-add-item");
for (let i = 0; i < addPizzaButtons.length; i++) {
    let button = addPizzaButtons[i];
    button.addEventListener('click', addPizzaToBasket);
}

// add pizzas to basket
function addPizzaToBasket(event) {

    // Grab the pizza size, crust, and name. Attach to feedArray
    let button = event.target;
    let rowElement = button.parentElement;
    let sizeValues = rowElement.getElementsByClassName('pizza-size')[0];
    let feedArray = sizeValues.value.split(",");

    // fill cell with crust
    let cardBody = button.parentElement.parentElement;
    let crustRow = cardBody.getElementsByClassName("row")[1];
    let pizzaCrustSelect = crustRow.getElementsByClassName("pizza-crust")[0];
    let crustSelected = pizzaCrustSelect.value;

    // alert(sizeValues.options[sizeValues.selectedIndex].value);
    if(pizzaCrustSelect.options[pizzaCrustSelect.selectedIndex].value == "Select crust" ||
        sizeValues.options[sizeValues.selectedIndex].value == "Select size") {
        alert("Please select a size and crust for your pizza.");
    } else {
        // grab the pizza name, this has been replaced by code block below that grabs size, crust, and name in one go
        // let button = event.target;
        // let cardBody = button.parentElement.parentElement;
        // let name = cardBody.getElementsByClassName("item-name")[0].innerText;
        // alert (name);

        let table = document.getElementById("basket-table");

        // add row to table and insert cells
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        // assign values to empty cells
        // fill cell with size
        cell1.innerHTML = feedArray[0];

        cell2.innerHTML = crustSelected;
        // fill cell with name
        cell3.innerHTML = feedArray[1];
        // fill cell with price
        cell4.innerHTML = feedArray[2];
        cell5.innerHTML = "<button class=delete>Delete</button>";

        let deleteButtons = document.getElementsByClassName('delete');
        // following lines of code only run inside the add pizza to basket function, not outside of it
        for (let i = 0; i < deleteButtons.length; i++) {
            let button = deleteButtons[i];
            button.addEventListener('click', deleteRow)
            // deleteTandooriButtons[i].onclick = test;
        }
        // This function runs multiple times when there are multiple items in the basket. Is that a problem?
        function deleteRow(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateBasketTotal();
        }
        updateBasketTotal();
    }


}

// add event listeners to pizza add item buttons, to add pizza to basket
let add5050PizzaButton = document.getElementById("50-50-add");
add5050PizzaButton.addEventListener('click', addFiftyFiftyPizzaToBasket);

function addFiftyFiftyPizzaToBasket(event) {

    // Grab the pizza size, crust, and name. Attach to feedArray
    let button = event.target;
    let rowElement = button.parentElement;
    let sizeValues = rowElement.getElementsByClassName('pizza-size')[0];
    let feedArray = sizeValues.value.split(",");

    // fill cell with crust
    let cardBody = button.parentElement.parentElement;
    let crustRow = cardBody.getElementsByClassName("row")[1];
    let pizzaCrustSelect = crustRow.getElementsByClassName("pizza-crust")[0];
    let crustSelected = pizzaCrustSelect.value;

    // grab pizza halves
    let correctFirstRow = cardBody.getElementsByClassName("row")[2];
    let firstSelect = correctFirstRow.getElementsByClassName("50-50-first-half")[0];
    let firstHalf = firstSelect.value;
    let correctSecondRow = cardBody.getElementsByClassName("row")[3];
    let secondSelect = correctSecondRow.getElementsByClassName("50-50-second-half")[0];
    let secondHalf = secondSelect.value;

    // alert(sizeValues.options[sizeValues.selectedIndex].value);
    // alert (firstHalf.options[firstHalf.selectedIndex].value);
    if(pizzaCrustSelect.options[pizzaCrustSelect.selectedIndex].value == "Select crust" ||
        sizeValues.options[sizeValues.selectedIndex].value == "Select size" ||
        firstSelect.options[firstSelect.selectedIndex].value == "Select first pizza half" ||
        secondSelect.options[secondSelect.selectedIndex].value == "Select second pizza half") {
        alert("Please select a size, crust, and two halves for your pizza.");
    }
    else {
        // grab the pizza name, this has been replaced by code block below that grabs size, crust, and name in one go
        // let button = event.target;
        // let cardBody = button.parentElement.parentElement;
        // let name = cardBody.getElementsByClassName("item-name")[0].innerText;
        // alert (name);

        let table = document.getElementById("basket-table");

        // add row to table and insert cells
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        // assign values to empty cells
        // fill cell with size
        cell1.innerHTML = feedArray[0];

        cell2.innerHTML = crustSelected;
        // fill cell with name
        cell3.innerHTML = "50/50 Pizza, first half: " + firstHalf + ", second half: " + secondHalf;
        // fill cell with price
        cell4.innerHTML = feedArray[1];
        cell5.innerHTML = "<button class=delete>Delete</button>";

        let deleteButtons = document.getElementsByClassName('delete');
        // following lines of code only run inside the add pizza to basket function, not outside of it
        for (let i = 0; i < deleteButtons.length; i++) {
            let button = deleteButtons[i];
            button.addEventListener('click', deleteRow)
            // deleteTandooriButtons[i].onclick = test;
        }
        // This function runs multiple times when there are multiple items in the basket. Is that a problem?
        function deleteRow(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateBasketTotal();
        }
        updateBasketTotal();
    }


}

// add event listeners to side add item buttons, to add side to basket
let addSideButtons = document.getElementsByClassName("side-add-item");
for (let i = 0; i < addSideButtons.length; i++) {
    let sideButton = addSideButtons[i];
    sideButton.addEventListener('click', addSideToBasket);
}

function addSideToBasket(event) {


    let button = event.target;
    let rowElement = button.parentElement;
    let hiddenInput = rowElement.getElementsByClassName('side-values')[0];
    let feedArray = hiddenInput.value.split(",");

    let table = document.getElementById("basket-table");

    // add row to table and insert cells
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // assign values to empty cells
    // fill cell with size
    cell1.innerHTML = "";

    cell2.innerHTML = "";
    // fill cell with name
    cell3.innerHTML = feedArray[0];
    // fill cell with price
    cell4.innerHTML = feedArray[1];
    cell5.innerHTML = "<button class=delete>Delete</button>";

    let deleteButtons = document.getElementsByClassName('delete');
    // following lines of code only run inside the add pizza to basket function, not outside of it
    for (let i = 0; i < deleteButtons.length; i++) {
        let button = deleteButtons[i];
        button.addEventListener('click', deleteRow)
    }
    // This function runs multiple times when there are multiple items in the basket. Is that a problem?
    function deleteRow(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateBasketTotal();
    }

    updateBasketTotal();

}

// add event listeners to side add item buttons, to add side to basket
let addDrinkButtons = document.getElementsByClassName("drink-add-item");
for (let i = 0; i < addDrinkButtons.length; i++) {
    let drinkButton = addDrinkButtons[i];
    drinkButton.addEventListener('click', addDrinkToBasket);
}

function addDrinkToBasket(event) {


    let button = event.target;
    let rowElement = button.parentElement;
    let hiddenInput = rowElement.getElementsByClassName('side-values')[0];
    let feedArray = hiddenInput.value.split(",");

    let table = document.getElementById("basket-table");

    // add row to table and insert cells
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    // assign values to empty cells
    // fill cell with size
    cell1.innerHTML = feedArray[0];

    cell2.innerHTML = "";
    // fill cell with name
    cell3.innerHTML = feedArray[1];
    // fill cell with price
    cell4.innerHTML = feedArray[2];
    cell5.innerHTML = "<button class=delete>Delete</button>";

    let deleteButtons = document.getElementsByClassName('delete');
    // following lines of code only run inside the add pizza to basket function, not outside of it
    for (let i = 0; i < deleteButtons.length; i++) {
        let button = deleteButtons[i];
        button.addEventListener('click', deleteRow)
    }
    // This function runs multiple times when there are multiple items in the basket. Is that a problem?
    function deleteRow(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateBasketTotal();
    }

    updateBasketTotal();

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