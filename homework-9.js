// 6 пункт.

import { comments } from "./comments.js";
console.log(comments);

// 2 пункт.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter((number) => number >= 5);
console.log(newArray);

// 3 пункт.

const clothes = ["шорты", "футболка", "джинсы", "рубашка", "носки"];
console.log(clothes.includes("джинсы"));

// 4 пункт.

const reverseArray = (arr) => {
  return arr.reverse();
};
console.log(reverseArray(numbers));
console.log(reverseArray(clothes));

// 7 пункт.

const filteredComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(filteredComments);

// 8 пункт.

const newComments = comments.map((comment) => {
  const updatedItem = { ...comment };
  updatedItem.postId = updatedItem.id <= 5 ? 2 : 1;
  return updatedItem;
});
console.log(newComments);

// 9 пункт.

const shortComments = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));
console.log(shortComments);

// 10 пункт.

const validatedComments = comments.map((item) => {
  if (item.body.length > 180) {
    item.isInvalid = true;
  } else {
    item.isInvalid = false;
  }
  return item;
});
console.log(validatedComments);

// 11 пункт.

const emailsWithReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);
console.log(emailsWithReduce);
const emailsWithMap = comments.map((comment) => comment.email);
console.log(emailsWithMap);
