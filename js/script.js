/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Allows me to loop through 
const all = {
	quote: document.getElementsByClassName("quote")[0],
	source: document.getElementsByClassName("source")[0],
	citation: document.getElementsByClassName("citation")[0],
	year: document.getElementsByClassName("year")[0]
}




const quotes = [
	{
		quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
		source: "Dr. Suess",
		citation: "Something",
		year: 1987
	},
	{
		quote: "I’m selfish, impatient and a little insecure.",
		source: "Marilyn Monroe",
		year: undefined
	},
	{
		quote: "Get busy living or get busy dying.",
		source: "Steven King",
		citation: "Some Book",
		year: 2001
	},
	{
		quote: "The first step toward success is taken when you refuse to be a captive...",
		source: "Mark Caine",
		year: 2005
	},
	{
		quote: "When one door of happiness closes, another opens;",
		source: "Helen Keller",
	},
	{
		quote: "something2",
		source: "Brad",
		citation: "Cool thing",
		year: 1856
	},
	{
		quote: "Blah blah blah blah...",
		source: "Terry",
		year: 1170
	},
	{
		quote: "What..? Super cool!",
		source: "Unknown",
		citation: "The Wowers",
		year: 1898
	}

];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	// Based on array.length
	let random = quotes[ Math.floor( Math.random() * quotes.length) ];
	return random;
}


/***
 * `printQuote` function
***/

function printQuote() {
	// Get quote
	const getQuote = getRandomQuote();

	// Hide year and citation
	all["year"].style.display = "none";
	all["citation"].style.display = "none";

	// Loop through properties in quote objects
	for ( let prop in getQuote ) {
		all[prop].innerHTML = "";
		
		// Incase property exists but value does not.
		if ( getQuote[prop] != undefined ) {
			all[prop].style.display = "inline-block";
			all[prop].innerHTML += getQuote[prop];
		}

	}
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);