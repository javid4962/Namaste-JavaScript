

const cart=[
   {item:"shoes", value:200},
   {item:"cloths", value:300},
   {item:"accessories", value:750},
   {item:"bags", value:250}
   ];
   
let wallet = 500;
const discount = 20;
const time = 2000;

createOrder(cart)
  .then(function(orderId){
      console.log(orderId);
      return orderId;
  })
  .then(function(){
      return proceedToPayment(cart);
  })
  .then(function(details){
      return showOrderSummary(details);
  })
  .then(function(discountPrice){
      return updateWallet(discountPrice, wallet);
  })
  .then(function(wallet){
    return showBalance(wallet);
  })
  .catch(function(err){
    console.log(err.message);
  })


function validateCart(cart){
    return true;
}

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const error = new Error("cart is not valid!");
            reject(error);
        }
        else{
            const orderId = Math.floor(10000 + Math.random() * 90000);
            resolve(orderId);
        }
    })
    
    return pr;
}

function proceedToPayment(cart){
    return new Promise(function(resolve, reject){
        let input = prompt("select your choice\n1. shoes 2. cloths 3. accessories 4. bags");
        if(input <= cart.length && input >= 1){
        var inputItem = cart[input-1].item;
        var inputValue = cart[input-1].value;
        var details = `${inputItem} ${inputValue}`;
        resolve(details);
        //resolve(inputValue)
        }
        else{
          const error = new Error("Invalid Input!");
          reject(error);
        }
    })
}

function showOrderSummary(details){
  details = details.split(' ');
  let inputItem = details[0];
  let inputValue = details[1];
  let discountPrice = inputValue - (inputValue*discount/100)
  //console.log(details)
    return new Promise(function(resolve, reject){
      setTimeout(()=>{
         console.log(`Choosen Item :\t${inputItem}\nItem Value :\t${inputValue}\nDiscount Percentage :\t${discount}% off\nTotal :\t${discountPrice}\n`);
      
        resolve(discountPrice);
      },time)
       
    })
}

function updateWallet(discountPrice, wallet){
  return new Promise(function(resolve, reject){
    if(wallet >= discountPrice){
    wallet = wallet - discountPrice;
    setTimeout(()=>{
       console.log("Wallet Updated Successfully!");
    //proceedToPayment(cart);
    resolve(wallet);
    },time)
   
    }
    else{
      const error = new Error("Insufficient Balance!");
      reject(error);
    }
  })
}

function showBalance(wallet){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log(`Balance Ammount :\t${wallet}`);
      resolve(wallet);
    },time)
      
  })
}
