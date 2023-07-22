
// Sample cart data (mock data)
//array of cart items and properties of the items
let cartItems = [
    { id: 1, name: 'MacBook', price: 19.99, quantity: 1 },
    { id: 2, name: 'Iphone', price: 29.99, quantity: 1 },
    { id: 3, name: 'Ladies bag', price:45.99, quantity:1},
    { id: 4, name: 'Car', price:20000.00, quantity:1},
    { id: 5, name: 'Book', price:1.99, quantity:1},
    { id: 6, name: 'camera', price:500.00, quantity:1},
    { id: 7, name: 'Shoe', price:99.99, quantity:1},
    { id: 8, name: 'Nike sneaker', price:88.50, quantity:1},
    { id: 9, name: 'sneaker', price:400.00, quantity:1},
    { id: 10, name: 'Dress', price:40.00, quantity:1},
    { id: 11, name:'Bag', price:99.99, quantity:1},
    { id: 12, name:'Piano', price:190.99, quantity:1},

];

// Function to display the shopping cart items
const displayShoppingCart = () => {
    const cartTableBody = document.querySelector('.shopping-cart tbody');
    const totalPriceElement = document.querySelector('.total-price');

    cartTableBody.innerHTML = ''; // Clear the previous content

    let totalPrice = 0;
 //for each loop to iterate over each item and accumulate prices
    cartItems.forEach(item => {
        const totalItemPrice = item.price * item.quantity;
        totalPrice += totalItemPrice;

        cartTableBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" class="quantity-input" data-item-id="${item.id}">
                </td>
                <td>$${totalItemPrice.toFixed(2)}</td>
                <td>
                    <button class="remove-btn" data-item-id="${item.id}">Remove</button>
                </td>
            </tr>
        `;
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Function to update quantity when the user changes the input value
const updateQuantity = (event) => {
    const itemId = parseInt(event.target.dataset.itemId);
    const newQuantity = parseInt(event.target.value);

    const cartItem = cartItems.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        displayShoppingCart(); // Update the cart display
    }
}

// Function to remove an item from the cart if user clicks on remove
const removeItem =(event) => {
    const itemId = parseInt(event.target.dataset.itemId);
    cartItems = cartItems.filter(item => item.id !== itemId);
    displayShoppingCart(); // Update the cart display
}

// Attach event listeners to quantity inputs and remove buttons
document.addEventListener('input', event => {
    if (event.target.classList.contains('quantity-input')) {
        updateQuantity(event);
    }
});

document.addEventListener('click', event => {
    if (event.target.classList.contains('remove-btn')) {
        removeItem(event);
    }
});

// Initial display of the shopping cart on page load
displayShoppingCart();
