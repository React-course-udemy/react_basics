import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Passant', age: 24 },
      { name: 'Adam', age: 29 },
      { name: 'Salma', age: 22 },
      { name: 'Osama', age: 16 }
    ],
    otherState: 'some othervalue'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Passantooottttaaaa', age: 24 },
        { name: 'Adam cheese', age: 29 },
        { name: 'Salloma', age: 22 },
        { name: 'Ossa', age: 16 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>hiiii I'm bassant</h1>
        <button onClick={this.switchNameHandler}>switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          {' '}
          my hoppies: is racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
