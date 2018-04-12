var total = 0;
var x = 0;
var num = prompt("Enter a Number");

for (x = 0; x <= num; x = x + 1) {
	total += x;
}

console.log(total);






var stringowords = '';
var word = '';
var i =  1;
var ans = prompt("do you want to play?", "yes or no");
do {
	var word = prompt("type a word");
	stringowords += word;
	var ans = prompt("do you want to play again?", "yes or no");
} while (ans.length == 3);
console.log(stringowords);








var phrase = 'Hello, My name is ';
var name = '';
var c = 0;
var answer = 'yes';
while(answer.length == 3) {
	if (c == 0) {
		var name = prompt("Hello, What is your name?");
		var answer = prompt("Would you like to print your name?", "yes or no");
		if (answer.length == 3) {
			console.log(phrase + name);
		}
	}
	else {
		var answer = prompt("Would you like to print this again?", "yes or no");
		if (answer.length == 3) {
			console.log(phrase + name);
		}
	}
	c = c + 1;
}






var breakfast = 'eggs and toast';
var lunch = 'a salad';
var dinner = 'chicken and rice';

var tod = prompt('What time of day is it?', 'Enter morning, noon, or night');

if (tod == 'morning' || tod == 'Morning') {
	alert(breakfast);
}

else if (tod == 'noon' || tod == 'Noon') {
	alert(lunch);
}

else if (tod == 'evening' || tod == 'Evening') {
	alert(dinner);
}