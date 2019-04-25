//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import BobCard from "./components/BobCard";
import bob from "./bob.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    bob,
    clickedBob: [],
    score: 0
  };

  //when you click on a card ... the img is taken out of the array
  imageClick = event => {
    const currentBob = event.target.alt;
    const BobAlreadyClicked =
      this.state.clickedBob.indexOf(currentBob) > -1;

    //if you click on an img that has already been selected, the game is reset and cards reordered
    if (BobAlreadyClicked) {
      this.setState({
        bob: this.state.bob.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedBob: [],
        score: 0
      });
      alert("You lose. Play again?");

      //if you click on an available img, your score is increased and cards reordered
    } else {
      this.setState(
        {
          bob: this.state.bob.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedBob: this.state.clickedBob.concat(
            currentBob
          ),
          score: this.state.score + 1
        },
        //if you get all 12 img corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              bob: this.state.bob.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedBob: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.bob.map(bob => (
            <BobCard
              imageClick={this.imageClick}
              id={bob.id}
              key={bob.id}
              image={bob.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;