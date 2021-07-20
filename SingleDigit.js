// Display a single digit in word

const ps = require("prompt-sync");
const prompt = ps();

let num  = prompt("Enter a Single Digit Number : ");

switch (num) {
	case 0:
		console.log("Your Number in words : Zero");
		break;
	case 1:
      console.log("Your Number in words : One");
		break;
	case 2:
      console.log("Your Number in words : Two");
		break;
	case 3:
      console.log("Your Number in words : Three");
		break;
	case 4:
      console.log("Your Number in words : Four");
		break;
	case 5:
      console.log("Your Number in words : Five");
		break;
	case 6:
      console.log("Your Number in words : Six");
		break;
	case 7:
      console.log("Your Number in words : Seven");
		break;
	case 8:
      console.log("Your Number in words : Eight");
		break;
	case 9:
      console.log("Your Number in words : Nine");
		break;
	default:
		console.log("Please Enter a Number between 0 to 9 !!")
}
