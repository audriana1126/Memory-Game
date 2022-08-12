


const cardArray = [
  { desc: 'pic1', imgSrc: 'truck1.png', className: 'pic1' },
  { desc: 'pic2', imgSrc: 'truck1.png', className: 'pic1' },
  { desc: 'pic3', imgSrc: 'truck2.png', className: 'pic2' },
  { desc: 'pic4', imgSrc: 'truck2.png', className: 'pic2' },
  { desc: 'pic5', imgSrc: 'truck3.png', className: 'pic3' },
  { desc: 'pic6', imgSrc: 'truck3.png', className: 'pic3' },
  { desc: 'pic7', imgSrc: 'truck4.png', className: 'pic4' },
  { desc: 'pic8', imgSrc: 'truck4.png', className: 'pic4' },
  { desc: 'pic9', imgSrc: 'truck5.png', className: 'pic5' },
  { desc: 'pic10', imgSrc: 'truck5.png', className: 'pic5' },
  { desc: 'pic11', imgSrc: 'truck6.png', className: 'pic6' },
  { desc: 'pic12', imgSrc: 'truck6.png', className: 'pic6' }];

const randomIndex = cardArray.sort(() => 0.5 - Math.random())
console.log(randomIndex)
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
const allCards = document.querySelector('.game');
let message = document.querySelector('.message')
let matches = document.querySelector('.matches')
let totalMatches = 0 


function buildGame() {
  for (let i = 0; i < cardArray.length; i++) {
  let card = document.createElement('img')
  card.setAttribute('src', 'cover.png')
  card.setAttribute('data-id', i)
  card.addEventListener('click', clickCard)
  document.querySelector('.game').appendChild(card)
  }
  }
function clickCard() {
  console.log('click')
  let id = this.getAttribute('data-id');
  cardsChosen.push(cardArray[id].className);
  cardsChosenId.push(id);
  this.setAttribute('src', cardArray[id].imgSrc);
  if (cardsChosen.length == 2) {
  setTimeout(checkForMatch, 500)
  }
  }
function checkForMatch() {
  let playingCard = document.querySelectorAll('img');
  const optionOne = cardsChosenId[0]
  const optionTwo = cardsChosenId[1]
  console.log(optionOne, optionTwo)
  if (cardsChosen[0] === cardsChosen[1]) {
  totalMatches++;
  matches.innerHTML=`Matches: ${totalMatches}`
  playingCard[optionOne].setAttribute('src', 'blank.png');
  playingCard[optionTwo].setAttribute('src', 'blank.png');
  cardsWon.push(cardsChosen)
  }
  else {
  playingCard[optionOne].setAttribute('src', 'cover.png');
  playingCard[optionTwo].setAttribute('src', 'cover.png')
  
  console.log(playingCard)
  }
  cardsChosen = []
  cardsChosenId = []
  }
  buildGame()

















