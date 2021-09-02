//Rick
let youRM = document.querySelector('#youRM');
let opponent = document.querySelector('#opponent');
let submitChar = document.querySelector('#submitChar');
let submitOpponent = document.querySelector('#submitOpponent');
let nameRM = "";
let playerOneSelection;
let playerOpponentSelection
let charListData;
let playerList = [];
let yourCharChoices = document.querySelector('.yourCharChoices');
let yourOpponentChoices = document.querySelector('.yourOpponentChoices');

submitChar.addEventListener('click', (e) => {
  e.preventDefault();
  yourCharChoices.innerHTML = "";
  nameRM = youRM.value;
  playerList = [];
  getChars();
  setTimeout(function () {
    playerOneSelection = charListData;
    console.log(playerOneSelection);
    listChar(playerOneSelection, yourCharChoices);
  }, 3000)


})

submitOpponent.addEventListener('click', (e) => {
  e.preventDefault();
  yourOpponentChoices.innerHTML = "";
  nameRM = opponent.value;
  playerList = [];
  getChars();
  setTimeout(function () {


    playerOpponentSelection = charListData;
    console.log(playerOpponentSelection);
    listChar(playerOpponentSelection, yourOpponentChoices);
  }, 3000);
});




async function getChars() {
  let url = `https://rickandmortyapi.com/api/character?name=${nameRM}`
  console.log(url);
  try {
    let charList = await axios.get(url);
    charListdata = "";
    charListData = charList.data.results;
    // console.log(charList.data.results[4].name);
    // charListData.forEach(element => {
    //   playerList.push(element);

    // });
  } catch (error) {
    console.log(error)
  }
}

function listChar(selections, divSelection) {
  console.log(selections);
  selections.forEach(element => {

    let charDiv = document.createElement('div');
    charDiv.classList.add('charCard');
    let charName = document.createElement('div');
    charName.classList.add('charName');
    let charImg = document.createElement('img');
    charImg.classList.add('charImg');

    charName.innerText = element.name;
    charImg.src = element.image;
    charDiv.appendChild(charName);
    charDiv.appendChild(charImg);
    divSelection.appendChild(charDiv);

  })

}