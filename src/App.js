import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    print: [{ output: "Output will be here" }],
    showOutput: false,
  };

  input = (event) => {
    let inputWord = event.target.value.length;
    let outputWord = "";
    if(inputWord < 5){
      outputWord = "Text too short"
    } else {
      outputWord = "Text long enough"
    }
    this.setState({
      print: [{ output: outputWord }],
      showOutput: true
    });
  };
  render() {
    let output = null;
    if (this.state.showOutput) {
      output = this.state.print[0].output};
      return (
        <div>
          <h1> Hello World</h1>
          <input type="text" onChange={this.input} />

          <ValidationComponent wordLength={output} />
        </div>
      );
    
  }
}

export default App;
