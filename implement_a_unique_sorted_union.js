function uniteUnique(...arg){
  let hashis = {};
  let res = [];
  for(const arr of arg){
    for(let i = 0; i < arr.length; i++)
      if(!hashis[arr[i]]){
        hashis[arr[i]] = true;
        res.push(arr[i]);
      }
  }
  return res;
}
