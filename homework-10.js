import { productCards } from "./products.js";
function renderCards(cardsToREnder) {
  const productCardTemplate = document.querySelector("#product-card-template");
  const productsGrid = document.querySelector(".products-grid");

  cardsToREnder.forEach((productCard) => {
    const cardClone = productCardTemplate.content.cloneNode(true);
    const img = cardClone.querySelector(".product-card__image");
    img.src = productCard.image;
    img.alt = productCard.alt || productCard.name;
    cardClone.querySelector(".product-card__category").textContent =
      productCard.category;
    cardClone.querySelector(".product-card__name").textContent =
      productCard.name;
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
}

// пункт 4.

const productsDescriptions = productCards.reduce((acc, productCard) => {
  acc.push({
    [productCard.name]: productCard.description,
  });
  return acc;
}, []);
console.log(productsDescriptions);

// 5 пункт.

function getCardsCount() {
  const userInput = prompt("Сколько карточек отбразить? От 1 до 5");
  const count = Number(userInput);
  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  } else {
    alert("Ошибка! Пожалуйста введите число от 1 до 5.");
    return null;
  }
}
const count = getCardsCount();
if (count !== null) {
  const selectedProducts = productCards.slice(0, count);
  renderCards(selectedProducts);
}
