function searchProduct() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const text = product.innerText.toLowerCase();
    product.style.display = text.includes(input) ? "block" : "none";
  });
}