console.log("Hello World!");
let B = false,
I = false,
N = false,
G = false,
O = false;

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
      B = true;
     console.log(`Random Number ${randomNumber} is in B. 1 - 15`);
    
   } else if (randomNumber >= 16 && randomNumber <= 30) {
      I = true
       console.log(`Random Number ${randomNumber} is in I. 16 - 30`);
      
   } else if (randomNumber >= 31 && randomNumber <= 45) {
      N = true
     console.log(`Random Number ${randomNumber} is in N. 31 - 45`);
    
   } else if (randomNumber >= 46 && randomNumber <= 55) {
      G = true
     console.log(`Random Number ${randomNumber} is in G. 46 - 55`);
   }
   else if (randomNumber >= 56 && randomNumber <= 75) {
      O = true
     console.log(`Random Number ${randomNumber} is in O. 55 - 75`);
   }
   else {
      console.log('The number is invalid.');
   }

   if (B == true && I == true && N == true && G == true && O == true) {
      console.log(`BINGOOO!!!`);
   }
}