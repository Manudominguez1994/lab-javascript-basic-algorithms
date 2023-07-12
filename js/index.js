console.log("I'm ready!!");
// Iteration 1: Names and Input

let hacker1 = "Manu";
let hacker2 = "Deivi";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let char1 = hacker1.length - hacker2.length
let char2 = hacker2.length - hacker1.length
let char3 = hacker1.length
if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${char1} characters.`);

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, it has ${char2} characters`);

} else if (hacker1.length === hacker2.length) {

    console.log(`Wow, you both have equally long names, $(char3) characters!`);
}

// Iteration 3: Loops
//3.1
let hacker1Cap = "";

for(let i = 0; i < hacker1.length; i++) {

    hacker1Cap += hacker1[i].toUpperCase() + " ";  
    
}

console.log(hacker1Cap);

//3.2
let result = "";

for( let i = hacker2.length - 1 ; i >= 0; i-- ){

   result += hacker2[i];

}

console.log(result);

//3.3

let firstLetter1 = hacker1Cap.slice(0,1);
let firstLetter2 = result.slice(0,1);


if(firstLetter1 > firstLetter2){
    console.log(`The driver's name goes first.`)
}else if (firstLetter1 < firstLetter2){
    console.log(`Yo, the navigator goes first definitely.`)
}else if (firstLetter1 === firstLetter2){
    console.log(`What?! You both have the same name?`)
}
