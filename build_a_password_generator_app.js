function generatePassword(len){
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let maximum = str.length;
  let res = "";
  for(let i = 1; i <= len; i++){
    let rand_idx = Math.floor(Math.random() * maximum);
    res += str[rand_idx];
  }
  return res;
}
let password = generatePassword(16);
console.log(`Generated password: ${password}`)

