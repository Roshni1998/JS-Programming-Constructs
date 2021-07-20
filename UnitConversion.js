// Unit conversion of different length unit

const ps = require("prompt-sync");
const prompt = ps();

let choice  = prompt("Choose one of the Conversion :1) Feet to Inch 2) Inch to Feet 3) Feet to Meter 4) Meter to Feet=> ");
var x = 12;

switch (choice) {
	case 1:
		let a = prompt("Enter Number that you want to convert : ");
		let inch = (a * x);
		console.log(`${a} ft = ${inch} inch`);
		break;
	case 2:
      let b = prompt("Enter Number that you want to convert : ");
      let feet = (b / x);
      console.log(`${b} inch = ${feet} ft`);
      break;
	case 3:
      let c = prompt("Enter Number that you want to convert : ");
		let y = (1000/3281);
      let meter = (c * y);
      console.log(`${c} ft = ${meter} m`);
      break;
	case 4:
      let d = prompt("Enter Number that you want to convert : ");
      let z = (3281/1000);
		let f = (d * z);
      console.log(`${d} m = ${f} ft`);
      break;
	default:
		console.log("Enter a valid choice!!");
}



