/* ===== JavaScript practice  =====*/
/* Our first JavaScript command
The name of this command is “alert.” It creates a pop-up window with a text that we can specify.
Inside of the parentheses we will write a text that we want to be displayed in a pop-up. */

// alert("Hello, World!");
// alert("How are you?");
// alert("Have a nice day!");

/* We can write the alerts on the same row but It's important to add semicolons after each command. 
Now we add semicolons after each command. Then save it and refresh the page.
And we see that everything works, because JavaScript first will run this command from
alert till semicolon, then this alert command till semicolon and finally this.
That’s why it’s better to follow the rule, that after command you should write a semicolon. */

// alert("Hello, World!"); alert("How are you?"); alert("Have a nice day!");

// confirm('Are you 18 years of age or older?');

// let isAdult = confirm('Are you 18 years of age or older?');
// console.log(isAdult);



// Naming Rules for Variables 

// Wrong way to declare a variable
// let poet = "Walt Whitman";

// Good way to declare a variable (Camel Case or Camel style)

// let fullNameOfPoet = "Walt Whitman";

// Variable names can begin with letters, with a dollar sign or even with an underscore.

// On the other hand, in JavaScript you can’t begin the name of a variable with a number or an ampersand sign.

/* Also, JavaScript is case-sensitive, 
meaning that in the following example: score (with all lowercase letters), 
and Score (with a capital S) 
and SCORE (in all caps) are not the same variables. */

// Prompt

// let name = prompt('Enter your name', 'Anonymous');
// console.log(name);



// let firstName = prompt('Your first name:', '');
// let lastName = prompt('Your last name:', '');
// let age = prompt('Your age:', '');

// console.log('Hello, '+firstName+' '+lastName+'. You are '+age+' years old.');


// Task 2
// let a = 5;
// let b = "r";
// console.log(a==="5" || b === "r");

// Task 3
// let a = 5;
// let b = "6";
// console.log( !(a >= 5 || b === 6) || !(a === "5" && b == 6) );


// Conditional statements
// let temp = 40;

// if(temp>70) {
// 	console.log('Go to the beach!');
// } else if(temp < 32) {
// 	console.log('Go ice skating');
// } else {
// 	console.log('Stay at home.');
// }

//Task conditional statements
// let favoriteDrink = "juice";

// if(favoriteDrink === "coffee") {
// 	console.log("I\'ll have coffee");
// } else if(favoriteDrink === "tea") {
// 	console.log("I\'ll have tea");
// } else if(favoriteDrink === "hot chocolate"){
// 	console.log("I\'ll have hot chocolate");
// } else {
// 	console.log("I\'ll have water");
// }


// Shorthand Operators
// let a = 10;
// let b = 5;
// let c = 2;
// console.log(a + b + c);
// a += 5;
// b--;
// c /= 2;
// console.log(a + b + c);


// ===== Loop =====
// increase from 0 to 10
// for(let i = 0; i < 11; i++) {
// 	console.log(i);
// }


// Increase from 40 to 60
// for(let i = 40; i < 61; i++) {
// 	console.log(i);
// }


// Decrease from 10 to 2
// for(let i = 10; i > 1; i--) {
// 	console.log(i);
// }


/* And as the last example, 
let’s display each letter of the word “Hello” on a new line.
To do this, we create a variable called “word”
and assign the word “Hello” to it. */
// let word = 'Hello';
// for(let i = 0; i < word.length; i++) {
// 	console.log(word[i]);
// }


// Task 1 - For loop
/*task was to write a program 
with the help of the for loop
and it has to display a multiplication table 
for a number entered by the user.
*/
// First way to do it
// let number = +prompt('Enter a number:', '');
// for(let i = 1; i <= 10; i++) {
// 	console.log(number + ' x ' + i + ' = ' + (number * i));
// }

// Second way
// let number = +prompt('Enter a number:', '');
// for(let i = 1; i <= 10; i++) {
// 	console.log(`${number} x ${i} = ${number * i}`);
// }


// For Loop - Task 2
// let num1 = +prompt('Enter a number 1', '0');
// let num2 = +prompt('Enter a number 2', '0');
// let sum = 0;

// for(let i = num1; i <= num2; i++) {
// 	if(i % 2 === 0) {
// 		sum += i;
// 	}
// }
// console.log(sum);



// ===== While Loop - Practice =====
// let bookPrice = 50;
// let budget = 80;
// while(budget >= bookPrice) {
// 	budget -= bookPrice;
// 	console.log("I've bought a book");
// }
// console.log("Rest: $" + budget);


// Task 1 - While Loop

// let number = +prompt('Enter a number:', '0');
// let sum = 0;
// let i = 1;
// while(i <= number) {
// 	sum += i;
// 	i++;
// }
// console.log(sum);


// Task 2 - While Loop
// let number = +prompt('Enter a number:', '');
// let sum = 0;
// while(number !== 0) {
// 	sum += number;
// 	number = +prompt('Enter a number:', '');
// }
// console.log(sum);


// Exercise - Functions- Javascript
// function toCamelCase (str) {
// 	let words = str.split(' ');
// 	console.log(words);
// }

// let str = 'To be or not to be';
// toCamelCase(str);

function toCamelCase (str) {
	let words = str.split(' ');
	for(let i = 0; i < words.length; i++) {
		words[i] = words [i][0].toUpperCase() + words[i].substring(1, words[i].length);
	}
	words[0] = words[0][0].toLowerCase() + words[0].substring(1, words[0].length);
	let result = words.join('');
	return result;
}

let str = prompt('Enter a sentence', '');
let str2 = toCamelCase(str);

console.log(str2);


























