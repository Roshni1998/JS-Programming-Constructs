// Display place value

const ps = require("prompt-sync");
const prompt = ps();

let num  = prompt("Enter a Place Value Number : ");

if (num == 1)
	console.log("Place Value is : UNIT");
else if (num == 10)
	console.log("Place Value is : TEN");
else if (num == 100)
	console.log("Place Value is : HUNDRED");
else if (num == 1000)
	console.log("Place Value is : THOUSAND");
else if (num == 10000)
	console.log("Place Value is : TEN THOUSAND");
else if (num == 100000)
	console.log("Place Value is : LAKH");
else if (num == 1000000)
	console.log("Place Value is : TEN LAKH");
else
	console.log("Please Enter a value in the format of 10^6");

