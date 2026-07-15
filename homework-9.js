// 2 пункт.

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newArray = numbers.filter(number => number >=5);
console.log(newArray)

// 3 пункт.

const clothes = ['шорты','футболка','джинсы','рубашка','носки'];
clothes.includes('джинсы');
console.log(clothes.includes('джинсы'));

// 4 пункт.

const reverseArray = (arr) => {
    return arr.reverse()
}
console.log(reverseArray(numbers));
console.log(reverseArray(clothes));

