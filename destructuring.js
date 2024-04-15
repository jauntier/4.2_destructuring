function getMinMaxSum(numbers) {
    
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
  
   
    return { min, max, sum };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result = getMinMaxSum(numbers);
  console.log(result); 
  