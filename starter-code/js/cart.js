/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = table.children[1];
  let item = cart.items;
  console.log(item);
  for(let i = 0; i < cart.items.length; i++) {
    
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.setAttribute('id' , i )
    td.textContent = 'X';
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = item[i].quantity;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = item[i].product;
    tr.appendChild(td);
    tbody.appendChild(tr);

  }

  

  // let tr = document.getElementById('tr');
  // table.appendChild(tr);
  // let th = document.createElement('th');
  // th.textContent = cart
  // tr.appendChild(th);
  console.log(tbody);

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
