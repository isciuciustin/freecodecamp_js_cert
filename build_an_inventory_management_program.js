let inventory = [];

function findProductIndex(name){
  name = name.toLowerCase();
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].name.toLowerCase() == name){
      return i;
    }
  }
  return -1;
}

function addProduct(prod_obj){
  prod_obj.name = prod_obj.name.toLowerCase();
  let find_idx = findProductIndex(prod_obj.name);
  if(find_idx != -1){
    inventory[find_idx].quantity += prod_obj.quantity;
    console.log(`${prod_obj.name} quantity updated`);
  }
  else{
    inventory.push(prod_obj);
    console.log(`${prod_obj.name} added to inventory`);
  }
}

function removeProduct(name, quantity){
  name = name.toLowerCase();
  let find_idx = findProductIndex(name);
  if(find_idx == -1){
    console.log(`${name} not found`);
  }
  else{
    if(inventory[find_idx].quantity >= quantity){
      inventory[find_idx].quantity -= quantity;
      console.log(`Remaining ${name} pieces: ${inventory[find_idx].quantity }`);
      if(inventory[find_idx].quantity == 0){
        inventory.splice(find_idx, 1);
      }
    }else{
      console.log(`Not enough ${name} available, remaining pieces: ${ inventory[find_idx].quantity}`);
    }
  }
}
addProduct({name: "FLOUR", quantity: 5});
addProduct({name: "FLOUR", quantity: 5});
removeProduct("FLOUR", 5);
