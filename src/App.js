import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
 
  state = {
    print: [
      { output: "Output will be here" },
      
    ],
    showOutput: false,
  };

  input = (event) => {
    let inputWord = event.target.value.length;
    //let letters = "test";
    let outputWord = "";
    if(inputWord < 5){
      outputWord = "Text too short"
    } else {
      outputWord = "Text long enough"
    }
  
    this.setState({
      print: [
        { output: outputWord }, 
        { letters: "test2" }
      ],

      showOutput: true,
    });
  };

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    }
    let output = null;

    if (this.state.showOutput) {
      output = (
      <div>
        <ValidationComponent wordLength={this.state.print[0].output} />
      </div>)
      }
      
        
      return (
        <div>
          <h1> Hello World</h1>
          <input type="text" onChange={this.input} />
          {output}

          <div style={style}>
            <CharComponent char={this.state.print[1]} />

            {/* {this.state.letters.map((letter) => {
              return <CharComponent char={this.letter} />;
            })} */}
          </div>
        </div>
      );
    
  }
}

export default App;
