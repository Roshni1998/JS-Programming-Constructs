// Display the week day

const ps = require("prompt-sync");
const prompt = ps();

let weekDay  = prompt("Enter a Number between 1 to 7 : ");

if (weekDay == 1)
	console.log("Weekday : Sunday");
else if (weekDay == 2)
	console.log("Weekday : Monday");
else if (weekDay == 3)
   console.log("Weekday : Tuesday");
else if (weekDay == 4)
   console.log("Weekday : Wednesday");
else if (weekDay == 5)
   console.log("Weekday : Thursday");
else if (weekDay == 6)
   console.log("Weekday : Friday");
else if (weekDay == 7)
   console.log("Weekday : Saturday");
else
	console.log("Please Enter a valid number!!");
