// JavaScript for Search Bar
document.getElementById("searchInput").addEventListener("input", function() {
    var searchQuery = this.value.toLowerCase();
    var productCards = document.querySelectorAll(".product-card");

    productCards.forEach(function(card) {
        var productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = "block"; // Show product if it matches the search query
        } else {
            card.style.display = "none"; // Hide product if it doesn't match
        }
    });
});
