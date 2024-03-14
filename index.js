console.log("Hello World!");

generateNumber(75);

function generateNumber(max) {
   // Add = +
   // Sub = -
   // Div = /
   // Mult = *
   // Rem = %
   let randomNumber = Math.floor(Math.random() * max) + 1;

   // if else if else
   // GT>, GTE >=, LT<, LTE <=, EQ =, NEQ !=, AND && , OR||

   if (randomNumber <= 15) {
    return console.log(`Random Number ${randomNumber} is in B. 1 - 15`);
      
   } else if (randomNumber >= 16 && randomNumber <= 30) {
      return console.log(`Random Number ${randomNumber} is in I. 16 - 30`);
      
   } else if (randomNumber >= 31 && randomNumber <= 45) {
    return console.log(`Random Number ${randomNumber} is in N. 31 - 45`);
   }
   else if (randomNumber >= 46 && randomNumber <= 55) {
    return console.log(`Random Number ${randomNumber} is in G. 46 - 55`);
   }
   else if (randomNumber >= 56 && randomNumber <= 75) {
    return console.log(`Random Number ${randomNumber} is in O. 55 - 75`);
   }
   else {
      console.log('The number is invalid.')
   }

   return console.log(randomNumber);
}