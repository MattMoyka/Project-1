function playGame() {
  const body = document.body;

  console.log(body);

  let counter = 0;
  function createDuck() {


    const duck = document.createElement('div');
    duck.classList.add('duck');
    body.appendChild(duck);

    let randomPosition = () => {
      let duckRand = document.querySelectorAll('.duck');
      console.log(duckRand);
      let topPx = Math.random() * window.innerHeight;
      let leftPx = Math.random() * window.innerWidth;
      console
      duckRand[counter].style.top = `${topPx}px`;
      duckRand[counter].style.left = `${leftPx}px`;
    };
    randomPosition();

    body.appendChild(duck);

    let flapping = setInterval(() => { duck.classList.contains('flap') == true ? duck.classList.remove('flap') : duck.classList.add('flap'); }, 250);

    let duckClass = document.querySelectorAll('.duck');

    setInterval(function () {
      duckClass.forEach((duckObj) => {
        let topPx = Math.random() * window.innerHeight;
        let leftPx = Math.random() * window.innerWidth;

        duckObj.style.top = `${topPx}px`;
        duckObj.style.left = `${leftPx}px`;

      })
    }, 1000);



    duckClass.forEach((duckShoot) => {
      duckShoot.addEventListener('click', () => {
        duckShoot.classList.add('shot');
        setTimeout(() => { duckShoot.remove() }, 100);
        checkForWinner();

      });

    })

  };

  for (let i = 0; i < 3; i++) {
    createDuck()
    counter += 1;
    console.log(counter);
  };

};

let checkForWinner = () => {
  let ducky = document.querySelectorAll('div');


  if (ducky.length - 1 !== 0) {
    console.log('keep Shooting');
    console.log(ducky.length - 1);
  } else {
    alert('You Win!');
  }
}
playGame();
// let playGame = document.querySelector('#playGame');
// playGame.addEventListener('click', playGame());