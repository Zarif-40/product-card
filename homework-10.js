import { productCards } from "./products.js";

const productCardTemplate = document.querySelector("#product-card-template");
const productsGrid = document.querySelector(".products-grid");

productCards.forEach((productCard) => {
  const cardClone = productCardTemplate.content.cloneNode(true);
  const img = cardClone.querySelector(".product-card__image");
  img.src = productCard.image;
  img.alt = productCard.alt || productCard.name;
  cardClone.querySelector(".product-card__category").textContent =
    productCard.category;
  cardClone.querySelector(".product-card__name").textContent = productCard.name;
  cardClone.querySelector(".product-card__description").textContent =
    productCard.description;
  cardClone.querySelector(".product-card__price-value").textContent =
    productCard.price;
  const ingredientsList = cardClone.querySelector(
    ".product-card__ingredient-list",
  );
  ingredientsList.innerHTML = "";
  if (Array.isArray(productCard.ingredients)) {
    productCard.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.classList.add("product-card__ingredient");
      li.textContent = ingredient;
      ingredientsList.append(li);
    });
  }
  productsGrid.append(cardClone);
});
