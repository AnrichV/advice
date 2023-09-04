import React, { Component } from "react";
import iconDice from "./Icons/iconDice.svg";
import ApiDisplay from "./ApiDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  componentDidMount() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.slip }));
  }

  randomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.slip }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="Container">
            <ApiDisplay id={data.id} advice={data.advice} />
            <button className="btnAsk" onClick={this.randomAdvice}>
              <img className="img" src={iconDice} alt="Dice" />
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
