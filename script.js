let username = prompt("who are you?");
let adjective = prompt("name an adjective");
let noun = prompt("name a noun");
let verb = prompt("name a verb");
let verbing = prompt("name a verb ending in ing");
let verbiy = prompt("name another verb");
let adjectivel = prompt("name another adjective");
let verbss = prompt("name another verb");

let mystory = `<h1> ${username} was sitting at their computer, feeling ${adjective} as they tried to debug a ${adjective} line of code. Suddenly, they realized they had forgotten to add a ${noun} , causing the program to ${verb}. After hours of ${verbing} , they decided to ${verbiy} their computer in frustration. Just when they were about to give up, a ${adjectivel} error message appeared, and ${username}  couldnt help but ${verbss} with excitement. </h1>`;

console.log(mystory);

document.getElementById("story").innerHTML = mystory;
