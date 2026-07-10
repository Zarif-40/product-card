// 3 пункт.

const showWeather = (Таразе, temperature) => {
  console.log(`Сейчас в ${Таразе} температура - ${34} градусов по цельсию`);
};
showWeather("Таразе", 34);

// 4 пункт.

const SPEED_LIGHT = 299792458;
const checkSpeed = (speed) => {
  if (speed === SPEED_LIGHT) {
    console.log("Скорость света");
  } else if (speed > SPEED_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else {
    console.log("Субсветовая скорость");
  }
};
checkSpeed(300000000);
checkSpeed(299792458);
checkSpeed(250000000);

// 5 пункт.

const productName = "Телефон";
let productPrice = 1000;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    console.log(`${productName} преобретен. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}, пополните баланс`);
  }
};
buyProduct(1500);
buyProduct(500);

// 6 пункт.

function showReminder() {
  console.log("Нужно позвонить мастеру!");
}
showReminder();

// 7 пункт.

const cityName = "Midina";
let population = 2100000;
let numberMosques = 1000;
