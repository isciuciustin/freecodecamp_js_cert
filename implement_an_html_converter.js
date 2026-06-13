function convertHTML(str){
  let res = "";
  for(const ch of str){
    if(ch == "&"){
      res += "&amp;";
    }
    else if(ch == "<"){
      res += "&lt;";
    }
    else if(ch == ">"){
      res += "&gt;";
    }
    else if(ch == "\""){
      res += "&quot;";
    }
    else if(ch == "'"){
      res += "&apos;";
    }
    else{
      res += ch;
    }
  }
  return res;
}

console.log(convertHTML("Dolce & Gabbana"))
