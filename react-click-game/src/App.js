import React, { Component } from "react";
import Card from "./components/Card/card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron/jumbotron";
import Score from "./components/Score/score";
import art from "./art.json";

class App extends Component {

  state = {
    art,
    isClicked: [],
    score: 0,
    goal: 8,
    highScore: 0,
    status: ""
  };

  shuffleCards = id => {

    let isClicked = this.state.clickedArtIds;

    if (isClicked.includes(id)) {
      this.setState({
        isClicked: [],
        score: 0,
        status: "Game Over! You lost. Click to play again!"
      });
      return;

    } else {
      isClicked.push(id)


      if (isClicked.length === 8) {
        this.setState({ 
          score: 8, 
          status: "You Won! Click to play again", 
          isClicked: [] 
      });
        return;
      }

      if (this.state.score > this.state.highscore) {
        this.setState({
          highscore: this.state.score
        });
        return;
      }

      this.setState({ 
        art, 
        isClicked, 
        score: isClicked.length, 
        status: " " });

      for (let i = art.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [art[i], art[j]] = [art[j], art[i]];
      }
    }
  }


    


  // Map over this.state.art and render a Card component for each art object
  render() {
    return (
      <Wrapper>
        <Jumbotron> </Jumbotron>
        <Score total={this.state.score}
               goal={8}
               highscore={this.state.highScore}
               status={this.state.status}
               />
        {this.state.art.map(art => (
          <Card
            shuffleCards ={this.shuffleCards}
            id={art.id}
            key={art.id}
            image={art.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
