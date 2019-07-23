import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/buttonComponent/button.js'
import Previewer from './components/previewerComponent/previewer.js'

/* the parent component which save the arithmetic to be solved in the arithmetic state and assign the 
value to the answer state when the equals to button is clicked*/
class Home extends React.Component {
   constructor(props){
     super(props);

     this.state = {
       arithmetic : "",
       answer : 0,
     }

     this.buttonClick = this.buttonClick.bind(this);
     this.acClick = this.acClick.bind(this);
     this.equalsClick = this.equalsClick.bind(this);
   }
  
   /* all the buttons function which renders the button inner HTML through te getting of the button's id, 
   except from the AC and Equalsto button, it manages the length of the input too */
  buttonClick(e){
    let state = this.state.arithmetic;
    let operators = ['+','/','*','-']
    if(state.length < 22){
      let buttonId = e.target.id;
      let buttonText = document.getElementById(buttonId).textContent;
      if(!operators.includes(state[state.length-1]) || !isNaN(buttonText)){
        this.setState({
        arithmetic: state.concat(buttonText)
      });
      }else{
        this.setState({
          arithmetic: state
        });
      }
    } else {
      this.setState({
        arithmetic: this.state.arithmetic,
        answer: "Max Limit Reach!"
      });
    }
  }

  /* the AC button function that clears the arithmetic and answer state */
  acClick(){
    this.setState({
      arithmetic: "",
      answer: 0
    });
  }

  /* the EqualsTo button function that solves the arithmetic in the state arithmetic when clicked with
    the eval() function also manages any invalid maths expression */
  equalsClick(){
    let state = this.state.arithmetic;
    let startOperators = ['/','*'];
    let endOperators = ['+','/','*','-'];
    if(startOperators.includes(state[0]) || endOperators.includes(state[state.length - 1])){
      this.setState({
        answer: "Invalid Arithmetic",
        arithmetic: state
      });
    }else{
      let solved = eval(this.state.arithmetic);
      this.setState({
        answer: solved,
        arithmetic: state
      });
    }
  }

    render(){
      return(
        <div>
        <h1 className="heading"> <img src={logo} className="App-logo" alt="logo" /> Javascript Calculator</h1>
          <div className="home-container">
            {/* rendering the imported functions the previewer(where the answers and maths expressions are
              displayed) and the button(consist of all buttons) */}
            <Previewer arithmeticState={this.state.arithmetic} answerState={this.state.answer}/>
            <Button buttonClick={this.buttonClick} acClick={this.acClick} equalsClick={this.equalsClick} />
          </div>
        </div>
      );
    }
}

export default Home;
