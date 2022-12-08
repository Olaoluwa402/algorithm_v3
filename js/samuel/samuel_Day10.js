/*17.
      Write a function that splits an array (first argument) into groups the length of size (second argument) 
      and returns them as a two-dimensional array.

      Example:
      chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

      chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

        */

function chunkArrayInGroups(arr, num) {
  let newArr = []
  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr.slice(i, i + num))
  }
  return newArr
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
