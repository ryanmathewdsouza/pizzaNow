import * as bootstrap from 'bootstrap';

let current = 0;
function addItem() {
    alert ("Item added to order");
}
const plus = document.getElementById("plus");
plus.onclick = addItem;