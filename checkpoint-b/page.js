// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.

// Import the products
import { items } from "./items.js";

// Function 1: Display products
export function renderItems(list) {
  const productList = document.querySelector("#list");

  productList.textContent = "";

  for (const item of list) {
    const card = document.createElement("li");

    card.classList.add("listing");

    card.textContent = `${item.name} - ${item.price} EGP`;

    productList.append(card);
  }
}

// Function 2: Get out-of-stock products
export function matching() {
  return items.filter(item => item.inStock === false);
}

// Function 3: Set up the page
export function start() {
  renderItems(items);

  const button = document.querySelector("#shortlist");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

if (!window.navigator.userAgent.includes("jsdom")) {
  start();
}