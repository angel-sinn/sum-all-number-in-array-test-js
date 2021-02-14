function sumItems(array) {
  let sum = 0;
  array.forEach((el) => {
    if (Array.isArray(el)) {
      sum += sumItems(el);
    } else {
      sum += el;
    }
  });
  return sum;
}

console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;
