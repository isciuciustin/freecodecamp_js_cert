function sumFibs(num){
  let a = 0;
  let b = 1;
  let sum = 0;
  while(b <= num){
    if(b % 2 == 1){
      sum += b;
    }
    let c = a + b;
    a = b;
    b = c;
  }
  return sum;
}
console.log(sumFibs(13))
