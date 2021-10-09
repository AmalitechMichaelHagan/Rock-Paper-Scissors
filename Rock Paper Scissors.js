/*
Variable declaration and initialization for the string values of rock, paper and scissors. 
Using variables rather than repeatedly typing helps control typing errors. 
const is used since values are constants. 
Variables are global to allow access from multiple functions
*/

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const cheat = 'bomb';

const getUserChoice = (userInput) => {

/*
Try catch block is used to log a message to screen in case an invalid data type (eg. integer) 
is passed which would result in an error.Returns false to be used within the playGame function 
and prevent the remaining lines within the function from executing 
*/

try{
  userInput = userInput.toLowerCase();
  }
  catch(e){
  console.log('Please Enter a Valid Input');
  return false;
  }

//The break keyword is ommited from the 1st 3 cases since the return statement exits the function when executed.

switch(userInput){
case rock : return rock;

case paper : return paper;

case scissors : return scissors;

case cheat : return cheat;

//false is returned to be used within the playGame function

default: console.log('Please Enter a Valid Input'); return false;

} 

}

const getComputerChoice = function(){
let cpuInput = Math.floor(Math.random()*3);

/*
Switch that has 3 possible values i.e 0,1,2.
Case 2 is assigned to the default case since its the only possibility if either 0 or 1 isn't returned. 
Break keyword omission explained in earlier comment
*/

switch(cpuInput){

case 0 : return rock;
case 1 : return paper;
default: return scissors;

}

}

function determineWinner(userChoice,computerChoice){

if(userChoice === cheat){
return 'You won!';
}

if(userChoice === computerChoice){
return 'Tie!'
}

if (userChoice === rock){

if( computerChoice === paper){

return 'Computer won!';

}else{
  return 'You won!';
}

} 

if (userChoice === paper){

if( computerChoice === scissors){

return 'Computer won!';

}else{
  return 'You won!';
}

} 

if (userChoice === scissors){

if( computerChoice === rock){

return 'Computer won!';

}else{
  return 'You won!';
}

} 
}

function playGame(){
  
  let userChoice = getUserChoice();

/*
The code within the if statement's block is only executed if getUserChoice returns a truthy value (non-empty string). 
Since the code within the block is properly executed if userChoice has a valid value, 
Entering an invalid string explicitely returns false from the getUserChoice function.
*/

  if(userChoice){
  let computerChoice = getComputerChoice();

  console.log('User: '+ userChoice +' \nComputer: '+ computerChoice);

 console.log(determineWinner(userChoice,computerChoice));
  }

}

playGame();