import React, {Component} from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))

  }

  handleChange = (e) => {
  this.setState({searchField: e.target.value})
};

  render() {
    const { monsters, searchField } = this.state;
    //const monsters =this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (

      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}/>

      </div>
    );
  }
}

export default App;
