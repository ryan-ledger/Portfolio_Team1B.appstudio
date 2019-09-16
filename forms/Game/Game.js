enterName = prompt('Hi! Please enter your first name.')
gameStart = prompt(`${enterName}, Welcome to The Big Adventure! Would you like to play? Enter Yes or No`)
if(gameStart == 'No'|| gameStart == 'no'){
  alert('Maybe next time!')
} else if (gameStart == 'Yes'|| gameStart == 'yes'){
  alert('Yay! Here are the game rules: There are 6 rooms including this one. This is the entrance room, there is also the Game Room, Kitchen, Living Room, Office Room, and the Bedroom. Enter all 6 rooms without hitting the wall to win the game. If you hit the wall too many times you will knock yourself out and the game will be over. Use the hints provided to help guide your decision')
}
beginGame = prompt('Type start to begin')
if(beginGame == 'start'|| beginGame == 'Start'){
  alert('Enter 1 to walk forward, 2 to walk backwards, 3 to walk left and 4 to walk right')
}
let move = []
move['Forward'] = 1
move['Backwards'] = 2
move['Left'] = 3
move['Right'] = 4
roomOne = prompt('You are in the entrance room type 1,2,3, or 4 to make your first move. HINT: The direction rhymes with a type of crime.')
if(roomOne == move['Forward'] || roomOne == move['Backwards']|| roomOne == move['Right']){
  alert('You have ran into the wall getting to the next room.')
} else if (roomOne == move['Left']){
  alert('Success! You have entered the Game Room')
}
let roomTwoname = 'Game Room'
roomTwo = prompt(`You are in the ${roomTwoname} type 1,2,3, or 4 to make your move. HINT: What is the opposite of the direction you just came from.`)
if(roomTwo == move['Forward'] || roomTwo == move['Backwards']|| roomTwo == move['Left']){
  alert('You have ran into the wall getting to the next room.')
} else if (roomTwo == move['Right']){
  alert('Success! You have entered the Kitchen')
}
roomThree = prompt('You are in the Kitchen type 1,2,3, or 4 to make your move. HINT: Setting up the kitchen table, where do you not place the fork?')
if(roomThree == move['Forward'] || roomThree == move['Backwards']|| roomThree == move['Left']){
  alert('You have ran into the wall getting to the next room.')
} else if (roomOne == move['Right']){
  alert('Success! You have entered the Living Room')
}
roomFour = prompt('You are in the Living Room type 1,2,3, or 4 to make your move. HINT: For every two steps ___ is one step backwards.')
if(roomFour == move['Backwards'] || roomFour == move['Left']|| roomFour == move['Right']){
  alert('You have ran into the wall getting to the next room.')
} else if (roomOne == move['Forward']){
  alert('Success! You have entered the Office Room')
}
var finalMove = prompt('You are in the Office room type 1,2,3, or 4 to make your final move to win the game. HINT: Majority of people in the world use this hand to do everything.')
switch(finalMove) {
case '4':
  alert('Congrats! You have entered the Bedroom and won the game. Go take a nap now.')
  break;
case '1':
  alert('Sorry you hit the wall too many times and knocked out.')
  break;
case '2':
  alert('Sorry you hit the wall too many times and knocked out.')
  break;
case '3':
  alert('Sorry you hit the wall too many times and knocked out.')
  break;
}
