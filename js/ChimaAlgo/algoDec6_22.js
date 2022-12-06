// 17.
//       Write a function that splits an array (first argument) into groups the length of size (second argument)
//       and returns them as a two-dimensional array.

//       Example:
//       chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

//       chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

//       chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

//       chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

//         */

let chunkArrayInGroups = (array, stopValue) => {
  let newValue = array.join("");
  console.log(newValue);
  let newArray = [];
  let split;
  for (let i = 0; i < array.length; i++) {
    split = newValue.substr(i, stopValue).split("");
    newArray.push(split);
    i = i + (stopValue - 1);
  }
  return newArray;
};
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 9, 10, 8, 2, 4], 4));
