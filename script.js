document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cart-count");
    const buttons = document.querySelectorAll(".cart-btn");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            cart.push({
                name: button.dataset.name,
                price: Number(button.dataset.price)
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            if (cartCount) {
                cartCount.textContent = cart.length;
            }

            alert("Product added to cart");

        });

    });

});