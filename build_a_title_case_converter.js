function titleCase(str){
  let arr = str.split(" ");
  let res = "";
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(j == 0){
        res += arr[i][j].toUpperCase();
      }
      else{
        res += arr[i][j].toLowerCase();
      }
    }
    if(i < (arr.length - 1))
      res += " ";
  }
  return res;
}

console.log(titleCase("I'm a little tea pot"));
