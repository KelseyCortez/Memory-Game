import React from 'react';

import MemoryCard from './components/Card.jsx';

import './App.css';

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i <= 15; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8]

    });
  }
  return shuffle(deck);
}
/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      won: false,
    };
  }

  unFlipCards = (card1Index, card2Index) => {
    let card1 = { ...this.state.deck[card1Index] };
    let card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    let newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      } else if (card2Index === index) {
        return card2;
      } else {
        return card;
      }
    })
    this.setState({ deck: newDeck });
  }
  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped === true) {
      return
    }
    let cardToFlip = { ...this.state.deck[cardIndex] }
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;

      }
      return card;
    })
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => { this.unFlipCards(card1Index, card2Index) }, 1000);

      }
      newPickedCards = [];

    }
    this.setState({ deck: newDeck, pickedCards: newPickedCards});

    this.gameOver(newDeck);
  };

    gameOver = (deck) => {
      let filteredDeck = deck.filter((card) => {
        return card.isFlipped;
      });
      if(filteredDeck.length === 16) {
        this.setState({ won: true }, () => {
          console.log(this.state.won);

        });
      }
      
    };

    resetGame = () => {
      this.setState({ deck: generateDeck(), pickedCards: [], won: false});
    };
  

  render() {

    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}
      />
    });

    return (
      <div className="App" >
        <header className="Apps-Header">
          <h1> Memory Game</h1>
          <h3>Match Cards To Win</h3>
        </header>
        <div> {cardsJSX.slice(0, 4)} </div>
        <div> {cardsJSX.slice(4, 8)}</div>
        <div> {cardsJSX.slice(8, 12)}</div>
        <div> {cardsJSX.slice(12, 16)}</div>
        <div>
          {this.state.won && (
            <button onClick={this.resetGame}>
              Reset Game
            </button> 
          )}
      </div>
      </div>
    );
}
}



  export default App;
