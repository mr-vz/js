const smallestDivisor = (num) => {
  let n = 2;

  if (num == 1) {
    return num;
  }

  const iter = (number, counter) => {
    if (number % counter == 0) {
      return counter;
    }
    return iter(number, counter + 1);
  };

  return iter(num, n);
};

console.log(smallestDivisor(1));
console.log(smallestDivisor(3));
console.log(smallestDivisor(4));
console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17
console.log(smallestDivisor(117));
console.log(smallestDivisor(109));