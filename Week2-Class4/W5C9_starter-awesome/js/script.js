$(document).ready(function(){
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
	document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(text.length - 2);
	}
	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	document.getElementById('checkWork_submit').onclick = function(){
		var searchWord = document.getElementById('checkWork_input').value;
		var searchResult = (document.getElementById('ps3Text').innerHTML.indexOf(searchWord) >= 0) ? 'Yes' : 'No';
		document.getElementById('checkWork_display').innerHTML = '<br>' + searchResult
	}
	/****** QUESTION 4 ************/
	// Reverse string inputted by user
	document.getElementById('reverseString_submit').onclick = function(){
		var inputWord = document.getElementById('reverseString_input').value;
		var reverseWord = ((inputWord.split('')).reverse()).join('');
		//var flipArray = splitWord.reverse();
		//var backTogether = flipArray.join('');
		document.getElementById('reverseString_display').innerHTML = reverseWord;
	}

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	document.getElementById('helloworld_submit').onclick = function(){
		var output = 'HELLO WORLD';
		document.getElementById('helloworld_display').innerHTML = output;
	}

	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	document.getElementById('greet1_submit').onclick = function(){
		var name = document.getElementById('greet1_input').value;
		var greeting = 'Hello ' + name + ', welcome to the website';
		document.getElementById('greet1_display').innerHTML = greeting;
	}
	
	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME
	document.getElementById('greet2_submit').onclick = function(){
		var name = document.getElementById('greet2_input').value;

		if (name === 'Bob' || name === 'Alice' || name === 'Trevor') {
			var greeting = 'Hello ' + name + ', welcome to the website';
			document.getElementById('greet2_display').innerHTML = greeting;
		}
		else {
			document.getElementById('greet2_display').innerHTML = 'Go Away'
		}
	}

	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger
	document.getElementById('integerMax_submit').onclick = function(){
		var integer1 = document.getElementById('integerMax_input1').value;
		var integer2 = document.getElementById('integerMax_input2').value;
		console.log('integer1: ' + integer1 + ', integer2: ' + integer2);
		
		if (integer1 === integer2) {
			document.getElementById('integerMax_display').innerHTML = "They're Equal!"
		} 
		else {
			var winner = Math.max(integer1, integer2)
			document.getElementById('integerMax_display').innerHTML = winner
		}
	}

	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)
	document.getElementById('integerSign_submit').onclick = function(){
		var integer1 = document.getElementById('integerSign_input1').value;
		var integer2 = document.getElementById('integerSign_input2').value;
		var integer3 = document.getElementById('integerSign_input3').value;
		var total = integer1 * integer2 * integer3

		if (total > 0) {
			output = '+'
			document.getElementById('integerSign_display').innerHTML = output
		}
		else if (total === 0) {
			output = 'Neither negative, nor positive.'
			document.getElementById('integerSign_display').innerHTML = output
		}
		else {
			output = '-'
			document.getElementById('integerSign_display').innerHTML = output
		}
	}


	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest
	document.getElementById('integerSort_submit').onclick = function(){
		var numbers = [];
		numbers.push(document.getElementById('integerSort_input1').value);
		numbers.push(document.getElementById('integerSort_input2').value);
		numbers.push(document.getElementById('integerSort_input3').value);

		function sortNumbers(a,b) {
    	return a - b;
		}

		output = numbers.sort(sortNumbers);
		document.getElementById('integerSort_display').innerHTML = output.join()
	}


	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function
	document.getElementById('rps_submit').onclick = function(){
		var player1 = document.getElementById('rps_player1').value;
		var player2 = document.getElementById('rps_player2').value;
	
		function play(one, two) {
			if (one == two) {
				winner = "It's a tie. There are no winners here.";
				return winner;
				console.log(winner)
			}
			else if (one == 'rock') {
				if (two == 'paper') {
					winner = "Player 2";
					return winner;
					console.log(winner)
				}
				else {
					winner = "Player 1";
					return winner;
					console.log(winner)
				}
			}
			else if (one == 'paper') {
				if (two == 'scissors') {
					winner = "Player 2";
					return winner;
					console.log(winner)
				}
				else {
					winner = "Player 1";
					return winner;
					console.log(winner)
				}
			}
			else if (one == 'scissors') {
				if (two == 'rock') {
					winner = "Player 2";
					return winner;
					console.log(winner)
				}
				else {
					winner = "Player 1";
					return winner;
					console.log(winner)
				}
			}
			else{
				winner = "Something's gone horribly wrong.";
				return winner;
				console.log(winner)
			}
		}

		output = 'Winner: ' + play(player1, player2);

		document.getElementById('rps_winner_display').innerHTML = output
	}


	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user
	document.getElementById('factoral_submit').onclick = function(){
		var input = parseInt(document.getElementById('factoral_input').value);
		
		function factorial(num){
			if (num < 0){
				return -1;
			}
			else if (num == 0){
				return 1
			}
			else {
				return (num * factorial(num - 1));
			}
		}

		output = factorial(input)
		document.getElementById('factoral_display').innerHTML = output
	}

	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				
	document.getElementById('star_submit').onclick = function(){
		var star = '*';
		for(i=2;i<=6;i++) {
			document.getElementById('star_display').innerHTML += new Array(i).join(star) + '<br/>';
		}
	}

	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)
	document.getElementById('base_exp_submit').onclick = function(){
		//var base = parseInt(document.getElementById('base_input').value);
		//var exponent = parseInt(document.getElementById('exp_input').value);

		//document.getElementById('base_exp_display').innerHTML = Math.pow(base, exponent)
		document.getElementById('base_exp_display').innerHTML = Math.pow(parseInt(document.getElementById('base_input').value), parseInt(document.getElementById('exp_input').value))
	}

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	document.getElementById('foobar_submit').onclick = function(){
		for (i=1;i<101;i++){
			if ((i % 3 == 0) && (i % 5 == 0)) {
				document.getElementById('foobar_display').innerHTML += "FooBar" + '<br/>'
				console.log(i)
			}
			else if (i % 3 == 0) {
				document.getElementById('foobar_display').innerHTML += "Foo" + '<br/>'
				console.log(i)
			}
			else if (i % 5 == 0) {
				document.getElementById('foobar_display').innerHTML += "Bar" + '<br/>'
				console.log(i)
			}
			else {
				document.getElementById('foobar_display').innerHTML += i + '<br/>'
				console.log(i)
			}
		}
		
	}

});