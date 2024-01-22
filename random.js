const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  const fruits = ['apple', 'banana', 'orange'];
  const capitalizedFruits = fruits.map(capitalizeFirstLetter);
  
  console.log(capitalizedFruits);
  