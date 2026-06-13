function pairElement(str){
  let res = [];
  for(const ch of str){
    if(ch == "A"){
      res.push(["A", "T"]);
    }
    else if(ch == "T"){
      res.push(["T", "A"])
    }
    else if(ch == "C"){
      res.push(["C", "G"])
    }
    else{
      res.push(["G", "C"])
    }
  }
  return res;
}

console.log(pairElement("ACTG"))
