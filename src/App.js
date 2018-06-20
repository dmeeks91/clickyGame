import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    currentScore: 0,
    topScore: 0
  };

  clickCard = (name) => {
    let thisCard = this.state.cards.filter(card => card.name === name)[0],
        currentScore = this.state.currentScore + 1;

    if (thisCard.clicked)
    {
      this.gameOver(false, name);
    }
    else
    {
      if (!thisCard.clicked && this.state.currentScore === 12) return this.gameOver(true);
       
      thisCard.clicked = true;
      this.setState(
        { 
          currentScore: currentScore,
          topScore: (currentScore > this.state.topScore) ? currentScore : this.state.topScore,
          cards: this.shuffle(this.state.cards) 
        }
      );
    }
    
  };

  gameOver = (win, name) => {
    const msg = (win) ? "You win!" : `You've already clicked ${name}, try again!`;
    
    alert(msg);

    this.state.cards.filter(card => card.clicked === true).map(card => card.clicked = false);
    
    this.setState(
      {
        currentScore: 0,
        cards: this.shuffle(this.state.cards)
      }
    )
  }

  // Fisher-Yates Shuffle from https://www.frankmitchell.org/2015/01/fisher-yates/
  shuffle = (array) => {
    let i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="cardHolder row">
              {this.state.cards.map(card => (
                  <Card
                    key={card.name}
                    name={card.name}
                    image={card.image}            
                    clickCard={this.clickCard}
                  />
              ))} 
        </div>
      </div>
    );
  }
}

export default App;