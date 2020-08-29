import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';
import './App.css';
import Survey from './Component/Survey';

const StyledButton = styled.button`
  color: white;
  background-color: green;
  &:hover {
    background-color: lightgreen;
  }
`;



class App extends Component {
  state = {
    questions: [
      {id:'1', q: 'the time you usually go to bed'},
      {id:'2', q: 'your travel frequency'},
      {id:'3', q: 'how many times have you traveled'}
    ],
    options: [
      {op: '1-2'},
      {op: '3-4'},
      {op: '4-5'}
    ],
    addMoreQuestions: false
  }

  

  toggleQuestions = () => {
    const addQuestions = this.state.addMoreQuestions;
    this.setState( {addMoreQuestions: !addQuestions} );
  }

  optionHandler = (item) => {
    const options = this.state.options;
    options.push({item});
    this.setState();
  }

  addQuestionHandler = (index) => {
    const questions = [...this.state.questions];
    questions.push(() => {
      return <Survey></Survey>
    });
    this.setState({questions: questions});
  }

  render() {
    

    
    let questions = null;

    if ( this.state.addMoreQuestions ) {
      questions = (
        <div>
          {this.state.questions.map((index) => {
            return <Survey 
              click={() => this.addQuestionHandler(index)} />
             
          })}
        </div>
      );
    }

    return (
      <StyleRoot>
        <div>
        <Survey 
          clicked={() => this.optionHandler({Survey})}
          q={this.state.questions[0].q}
          op={this.state.options[0].op}></Survey>
          
        <Survey 
          clicked={() => this.optionHandler({Survey})} 
          q={this.state.questions[1].q}></Survey>
        <Survey 
          clicked={() => this.optionHandler({Survey})} 
          q={this.state.questions[2].q}></Survey>
        <StyledButton onClick={this.toggleQuestions}>Add questions</StyledButton>
      </div>
      </StyleRoot>
      
      
    )
  }

}

export default Radium(App);
