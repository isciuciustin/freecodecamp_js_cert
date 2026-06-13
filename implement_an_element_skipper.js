function dropElements(arr, func){
  let res = [];
  let ok = false;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      ok = true;
    }
    if(ok){
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
