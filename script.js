// array to store the products
let cart = [];

// Function to handle adding a product to the cart
function addToCart(productName, productPrice) {
    // Create an object representing the product
    const product = {
        name: productName,
        price: parseFloat(productPrice.replace('$', '')) // Convert price string to a number
    };
    // Add the product to the cart array
    cart.push(product);
    // Alert the user that the product has been added to the cart
    alert(`${productName} added to cart!`);
    // Update the cart total
    updateCartTotal();
}

// Function to update the total price displayed in the cart
function updateCartTotal() {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });
    document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentNode;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;
        addToCart(productName, productPrice);
    });
});

// Function to handle removing a product from the cart
function removeFromCart(productIndex) {
    cart.splice(productIndex, 1);
    updateCartTotal();
    displayCartItems();
}

// Function to display the cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Call displayCartItems initially to display any existing items in the cart
displayCartItems();
