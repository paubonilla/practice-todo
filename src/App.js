import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import List from './components/List'


class App extends Component {
  state = {
    inputValue: '',
    List: [
      // { value: "パオロ (Katakana)", done: false }
    ]
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }
  
  handleClick = (i) => {
    const List = this.state.List
    List[i].done = !List[i].done;
    this.setState({ List })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const newList = this.state.List;
    newList.push(newTodo);
    this.setState({ newList, inputValue: '' })
    console.log('YEAS');
  }

  render() {

    return (
      <div className="App">
        ぱおろ
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List 
          listItem={this.state.List}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
