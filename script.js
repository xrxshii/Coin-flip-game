// this retrieves the data previously saved from the browsers local data || if the local storage has no data saved it returns 0
let gameStats = (JSON.parse(localStorage.getItem('gameStats'))) || {
  win: 0,
  lose: 0
};

let result = '';
let computerResult = '';


// decides the game result for the player
function decidingResult (playerPick, resetButton) {
  let random1 = coinRandom();
  if (playerPick != computerResult) {
    result ='Lose';
    gameStats.lose +=1;
  } else {
    result ='Win';
    gameStats.win +=1;
  } 
  
  // saving the game Stats local, with JSON.stringify we can turn the gameStats number into a string 
  localStorage.setItem('gameStats', JSON.stringify(gameStats));

  // text under the buttons
  document.getElementById('textDisplay0').textContent = (`You picked ${playerPick}. The coin is ${computerResult}.`);
  document.getElementById('textDisplay1').textContent = (`You ${result}`)
  document.getElementById('textDisplay2').textContent = (`Wins: ${gameStats.win}. Losses: ${gameStats.lose}.`)
}


// random Coin-flip result
function coinRandom () { 
  const random1 = Math.random();
  if (random1 >= 0 && random1 < 0.5) {
    computerResult = 'head';
  } else if (random1 >= 0.5 && random1 < 1) {
    computerResult = 'tails';
  }
}
