// Reads 5 random 3 digit values and then outputs the minimum and maximum value

var randomNumber1 = Math.floor(100 + Math.random() * 900);
console.log(randomNumber1);
var randomNumber2 = Math.floor(100 + Math.random() * 900);
console.log(randomNumber2);
var randomNumber3 = Math.floor(100 + Math.random() * 900);
console.log(randomNumber3);
var randomNumber4 = Math.floor(100 + Math.random() * 900);
console.log(randomNumber4);
var randomNumber5 = Math.floor(100 + Math.random() * 900);
console.log(randomNumber5);

if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3 && randomNumber1 > randomNumber4 && randomNumber1 > randomNumber5) {
	console.log("Maximum Value is : " + randomNumber1);
} else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3 && randomNumber2 > randomNumber4 && randomNumber2 > randomNumber5) {
	console.log("Maximum Value is : " + randomNumber2);
} else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2 && randomNumber3 > randomNumbe4 && randomNumber3 > randomNumber5) {
	console.log("Maximum Value is : " + randomNumber3);
} else if (randomNumber4 > randomNumber1 && randomNumber4 > randomNumber2 && randomNumber4 > randomNumber3 && randomNumber4 > randomNumber5) {
	console.log("Maximum Value is : " + randomNumber4);
} else {
	console.log("Maximum Value is : " + randomNumber5);
}

if (randomNumber1 < randomNumber2 && randomNumber1 < randomNumber3 && randomNumber1 < randomNumber4 && randomNumber1 < randomNumber5) {
   console.log("Minimum Value is : " + randomNumber1);
} else if (randomNumber2 < randomNumber1 && randomNumber2 < randomNumber3 && randomNumber2 < randomNumber4 && randomNumber2 < randomNumber5) {
   console.log("Minimum Value is : " + randomNumber2);
} else if (randomNumber3 < randomNumber1 && randomNumber3 < randomNumber2 && randomNumber3 < randomNumber4 && randomNumber3 < randomNumber5) {
   console.log("Minimum Value is : " + randomNumber3);
} else if (randomNumber4 < randomNumber1 && randomNumber4 < randomNumber2 && randomNumber4 < randomNumber3 && randomNumber4 < randomNumber5) {
   console.log("Minimum Value is : " + randomNumber4);
} else {
   console.log("Minimum Value is : " + randomNumber5);
}

