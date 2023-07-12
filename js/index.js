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

//Bono1 :

let longtext = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

let numberEt = "";

 for (let i = 0; i < longtext.length; i++) {
    if(longtext[i] === " ")
          numberEt ++;
 }
console.log(numberEt);

let sum = 0;

for (let i = 0; i < longtext.length; i++) {
  if (longtext[i] === "e" && longtext[i+1] === "t") {
    sum++;
  } 
  
}
console.log(sum);
