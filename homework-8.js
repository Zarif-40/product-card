const user = {
  name: "Зариф",
  lastName: "Фазилов",
  age: 40,
  country: "Казахстан",
  city: "Тараз",
  email: "zarif780.zf@gmail.com",
  job: "Автомеханик",
  relationshipStatus: "Женат",
};
console.log(user);

// 4 пункт.

const car = {
  make: "Toyota",
  model: "Avensis Verso",
  year: 2001,
  color: "silver",
  transmission: "manual",
};

car.owner = user;

console.log(car);

// 5 пункт.

function checkMaxSpeed(car) {
  if ("maxSpeed" in car) {
    return;
  }
  car.maxSpeed = 200;
}

checkMaxSpeed(car);
console.log(car);

// 6 пункт.

function showPropertyValue(object, key) {
  console.log(object[key]);
}
showPropertyValue(car, "model");
showPropertyValue(car, "maxSpeed");

// 7 пункт.

const fruits = ["Яблоки", "Апельсины", "Груши", "Бананы"];

// 8 пункт.

const hadithCollection = [
  {
    title: "Сахих аль-Бухари",
    author: "Имам аль-Бухари",
    year: 846,
  },
  {
    itle: "Сахих Муслим",
    author: "Имам Муслим",
    year: 861,
  },
  { itle: "Сунан ан-Насаи", author: "Имам ан-Насаи", year: 915 },
];
console.log(hadithCollection);

// 9 пункт.

const moreHadithCollection = [
  {
    title: "Сунан Абу Дауд",
    author: "Имам Абу Дауд",
    year: 888,
  },
  {
    itle: "Сунан ат-Тирмизи",
    author: "Имам ат-Тирмизи",
    year: 884,
  },
];
console.log(moreHadithCollection);
const allCollection = [...hadithCollection, ...moreHadithCollection];
console.log(allCollection);

// 10 пункт.

function checkRareCollections(collectionsArray) {}
