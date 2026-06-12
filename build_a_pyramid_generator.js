function pyramid(str, rows, downwards){
    let res = "";
    if(downwards == false){
      let nr_spaces = rows - 1;
      let nr_ch = 1;
      for(let i = 1; i <= rows; i++){
        let row = "";
        if(i == 1){
          row += "\n"
        }
        for(let j = 1; j <= nr_spaces; j++)
          row += " ";
        for(let j = 1; j <= nr_ch; j++)
          row += str;
        
        row += "\n";
        res += row;
        nr_spaces -= 1;
        nr_ch += 2;
      }
    }
    else{
      let nr_ch = rows * 2 - 1;
      let nr_spaces = 0;
      for(let i = 1; i <= rows; i++){
        let row = "";
        if(i == 1){
          row += "\n"
        }
        for(let j = 1; j <= nr_spaces; j++)
          row += " ";
        for(let j = 1; j <= nr_ch; j++)
          row += str;
        row += "\n";
        res += row;
        nr_spaces += 1;
        nr_ch -= 2;
      }
      
      
    }
    console.log(res)
    return res;
}
pyramid("o", 4, false)
