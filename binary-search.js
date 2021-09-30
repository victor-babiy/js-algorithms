const binarySearch = (list, item) => {
  let lowIndex = 0;
  let highIndex = list.length - 1;

  while(lowIndex <= highIndex) {
    let middle = Math.floor((lowIndex + highIndex) / 2);
    let guess = list[middle];

    if (guess === item) {
      return middle;
    }

    if (guess > item) {
      highIndex = middle - 1;
    }

    if (guess < item) {
      lowIndex = middle + 1;
    }
  }

  return null;
};

console.log(binarySearch([-1,0,3,5,9,12], 9));