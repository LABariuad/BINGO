console.log("Hello World!");
let B = false, 
I = false,
N = false,
G = false,
O = false;

generateRandomNumber(75);


function generateRandomNumber(max) {
// Return random number 0 to 10;
   let randomNumber = Math.floor(Math.random() * max) + 1;

// if ...else if...else statement
//if (condition) {block of code to execute}
// =, !, =, >, <, > =, < =, &&, ||

   if (randomNumber <= 15) {
      B = true;
      console.log(`Random Number ${randomNumber} is in B. 1 - 15`);
      document.querySelector("#tr1").textContent = randomNumber;
   } else if (randomNumber >= 16 && randomNumber <= 30) {
      I = true;
      console.log(`Random Number ${randomNumber} is in I. 16 - 30`);
      document.querySelector("#tr2").textContent = randomNumber;
   } else if (randomNumber >= 31 && randomNumber <= 45) {
      N = true;
      console.log(`Random Number ${randomNumber} is in N. 31 - 45`);
      document.querySelector("#tr3").textContent = randomNumber;
   }
   else if (randomNumber >= 46 && randomNumber <= 60) {
      G = true;
      console.log(`Random Number ${randomNumber} is in G. 46 - 55`);
      document.querySelector("#tr4").textContent = randomNumber;
   }
   else if (randomNumber >= 61 && randomNumber <= 75) {
      O = true;
      console.log(`Random Number ${randomNumber} is in O. 55 - 75`);
      document.querySelector("#tr5").textContent = randomNumber;
   }
   else {
      console.log('The number is invalid.')
   }

if (B == true && I == true && N == true && G == true && O == true) {
   console.log("BINGOOO!!!");
   }

}

function generateRandomNumber2(max) {
   // Return random number 0 to 10;
      let randomNumber = Math.floor(Math.random() * max) + 1;
   
   // if ...else if...else statement
   //if (condition) {block of code to execute}
   // =, !, =, >, <, > =, < =, &&, ||
   
      if (randomNumber <= 15) {
         B = true;
         console.log(`Random Number ${randomNumber} is in B. 1 - 15`);
         document.querySelector("#tr6").textContent = randomNumber;
      } else if (randomNumber >= 16 && randomNumber <= 30) {
         I = true;
         console.log(`Random Number ${randomNumber} is in I. 16 - 30`);
         document.querySelector("#tr7").textContent = randomNumber;
      } else if (randomNumber >= 31 && randomNumber <= 45) {
         N = true;
         console.log(`Random Number ${randomNumber} is in N. 31 - 45`);
         document.querySelector("#tr8").textContent = randomNumber;
      }
      else if (randomNumber >= 46 && randomNumber <= 60) {
         G = true;
         console.log(`Random Number ${randomNumber} is in G. 46 - 55`);
         document.querySelector("#tr9").textContent = randomNumber;
      }
      else if (randomNumber >= 61 && randomNumber <= 75) {
         O = true;
         console.log(`Random Number ${randomNumber} is in O. 55 - 75`);
         document.querySelector("#tr10").textContent = randomNumber;
      }
      else {
         console.log('The number is invalid.')
      }
   
   if (B == true && I == true && N == true && G == true && O == true) {
      console.log("BINGOOO!!!");
      }
   
   }

 //Loops
 let counter = 0;
//  for (counter; counter < 5; counter++) {
//    console.log("Counter is " + counter);
//    if (counter == 3) break;
//  }

//  while (counter < 5) {
//    console.log("Counter is " + counter);
//    counter++;
//  }

// while(B == false || I == false || N == false || G == false || O == false ||) {
//    generateRandomNumber(75);
// }

while (!B || !I || !N || !G || !O) {
   generateRandomNumber(75);
   generateRandomNumber2(75);
}