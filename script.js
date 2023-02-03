let homescore = document.getElementById("homescore");
let guestscore = document.getElementById("guestscore");



let homecount = 0;
let guestcount = 0;

function chooseWinner() {
  if (homecount >= 15) {
    alert("Home team wins!");
  } else if (guestcount >= 15) {
    alert("Guest team wins!");
  } else if (homecount === 15 && guestcount === 15) {
    alert("It's a tie!");
  }
}

function plusOneHome() {
  homecount += 1;
  homescore.textContent = homecount;
  console.log(homecount);
  chooseWinner();
  return homecount;
}

function plusTwoHome() {
  homecount += 2;
  homescore.textContent = homecount;
  chooseWinner();
  return homecount;
}

function plusThreeHome() {
  homecount += 3;
  homescore.textContent = homecount;
  chooseWinner();
  return homecount;
}


function plusOneGuest() {
    guestcount += 1;
    guestscore.textContent = guestcount;
    chooseWinner();
    return guestcount;
  }
  
  function plusTwoGuest() {
    guestcount += 2;
    guestscore.textContent = guestcount;
    chooseWinner();
    return guestcount;
  }
  
  function plusThreeGuest() {
    guestcount += 3;
    guestscore.textContent = guestcount;
    chooseWinner();
    return guestcount;
  }

 

  function newGame() {
    homecount = 0;
    guestcount = 0;
    homescore.textContent = homecount;
    guestscore.textContent = guestcount;
  }

  
 

 










