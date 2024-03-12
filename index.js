console.log("Hello World!");

function generateRandomNumber () {

    let RandomNum = Math.floor(Math.random() * 10) + 4;

// if ...else if...else statement
//if (condition) {block of code to execute}
// =, !, =, >, <, > =, < =, &&, ||



    if (RandomNum >= 5) {
        console.log(`Random Number is > = to 5`);
    } else {
        console.log(`Random Number is < = to 5`);
    }

    return console.log(RandomNum);
}
