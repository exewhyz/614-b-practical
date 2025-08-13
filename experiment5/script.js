const products = [
  { name: "Jeans", category: "clothing" },
  { name: "Cookbook", category: "books" },
  { name: "Tshirt", category: "clothing" },
];

const productsElement = document.querySelector("#products");
const categoryElement = document.querySelector("#category");

function filter(category) {
  if (category === "all") {
    return products;
  } else {
    return products.filter((value) => {
      return value.category === category;
    });
  }
}

categoryElement.addEventListener("change", () => {
  const filtered = filter(categoryElement.value);
  const productList = filtered.map((value) => {
    return `<div style="border: 1px solid gray; padding: 10px; margin:5px;">${value.name}</div>`;
  });
  const data = productList.join("");
  productsElement.innerHTML = data;
});

const filtered = filter("all");
const productList = filtered.map((value) => {
  return `<div style="border: 1px solid gray; padding: 10px; margin:5px;">${value.name}</div>`;
});
const data = productList.join("");
productsElement.innerHTML = data;
