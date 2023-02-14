let cart = [];

// Get the add to cart buttons
const addToCartButtons = document.querySelectorAll("main li button");

// Get the cart count element
const cartCount = document.querySelector("header li i.fa-shopping-cart + span");

// Loop through the add to cart buttons
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    // Get the parent list item
    const listItem = this.parentNode;
    
    // Get the product title and description
    const productTitle = listItem.querySelector("h3").textContent;
    const productDescription = listItem.querySelector("p").textContent;
    
    // Create a product object
    const product = {
      title: productTitle,
      description: productDescription
    };
    
    // Add the product to the cart
    cart.push(product);
    
    // Update the cart count
    cartCount.textContent = cart.length;
  });
}
