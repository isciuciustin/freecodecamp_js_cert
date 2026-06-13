function sumAll(arr){
  let minimum = Math.min(arr[0], arr[1]);
  let maximum = Math.max(arr[0],arr[1]);
  let sum = 0;
  for(let i = minimum; i <= maximum; i++)
    sum += i;
  return sum;
}

console.log(sumAll([1, 4]))
