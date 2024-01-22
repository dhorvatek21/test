const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomArray = (length, minValue, maxValue) => Array.from({ length }, () => getRandomNumber(minValue, maxValue));

const randomArray = generateRandomArray(5, 1, 10);
console.log(randomArray);
