import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    print: [{ id: '1', output: "" }],
    showOutput: false,
  };

  input = (event) => {
    let inputWord = event.target.value;
  
    this.setState({
      print: [{ output: inputWord }],
      showOutput: true,
    });
  };
  deleteLetter = (letterIndex) => {
    
    const letters = [...this.state.print[0].output]
    
    letters.splice(letterIndex, 1)
    let newLetters = letters.join("")
    this.setState({print: [{output: newLetters}]})
    
  }
  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    };
    let output = null;
    let textLength = "";
    if (this.state.showOutput) {
      if (this.state.print[0].output.length < 5) {
        textLength = "Text too short";
      } else {
        textLength = "Text long enough";
      }
      output = (
        <div>
          <ValidationComponent wordLength={textLength} />
        </div>
      );
    }
    let renderedLetter = this.state.print[0].output.split("");

    return (
      <div>
        <h1> Hello World</h1>
        <input type="text" onChange={this.input} />
        {output}

        <div>
          {renderedLetter.map((letter, index) => {
            return (
              <div style={style}>
                <CharComponent 
                char={letter} 
                click={()=> this.deleteLetter(index)}
                
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
