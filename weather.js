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
let battle = document.querySelector('.battle');

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

let j = "one";

function listChar(selections, divSelection) {
  console.log(selections);
  selections.forEach((element, index) => {

    let charDiv = document.createElement('button');
    charDiv.classList.add('charCard');
    charDiv.setAttribute('id', index);
    let charName = document.createElement('div');
    charName.classList.add('charName');
    let charImg = document.createElement('img');
    charImg.classList.add('charImg');

    charDiv.addEventListener('click', (index) => {
      console.log(index.target.id);
      charDiv.classList.add(j);
      let characterSelect = index.target;
      battle.appendChild(characterSelect);
      j = "two";
    });


    charName.innerText = element.name;
    charImg.src = element.image;
    charDiv.appendChild(charName);
    charDiv.appendChild(charImg);
    divSelection.appendChild(charDiv);
  })

}

let startBattle = document.querySelector('.startBattle');
let fight = document.querySelector('.battle');
startBattle.addEventListener('click', () => {
  fight.style.justifyContent = "center";
  setTimeout(function () {
    fight.innerHTML = "";
    let boom = document.createElement('div');
    boom.classList.add('boom');
    fight.appendChild(boom);
    // fight.style.backgroundImage = 'url(./images/Daco_5777236.png)', 500
    // fight.style.width = '100px';
    // fight.style.height = '100px';

  }, 1000);

});

// function selector(index) {
//   console.log(index.target.id);

// }
