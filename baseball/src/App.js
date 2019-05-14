import React from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

import baseball from './assets/baseball.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ball: 0,
      strike: 0
    }
  }

  ballCount = () => {
    const addOne =this.state.ball + 1;

    if(this.state.ball < 3 ) {
      this.setState({ ball: addOne })
    } if (this.state.ball === 3 ) {
      this.setState({ ball: 0, strike: 0 })
    }
  }

  strikeCount = () => {
    const addOne =this.state.strike + 1;

    if(this.state.strike < 2 ) {
      this.setState({ strike: addOne })
    } if (this.state.strike === 2) {
      this.setState({ ball: 0, strike: 0 })
    }
  }

  foulCount = () => {
    const addOne = this.state.strike +1;

    if(this.state.strike < 2) {
      this.setState({ strike: addOne })
    }
  }

  hitCount = () => {
    this.setState({ ball: 0, strike: 0, foul: 0 })
  }

  render() {
    return (
      <div className='App'>
        <Display ball={this.state.ball} strike={this.state.strike} />
        <img className='background'src={baseball} />
        <Dashboard ballCount={this.ballCount} strikeCount={this.strikeCount} foulCount={this.foulCount} hitCount={this.hitCount}/>
      </div>
    )
  }
}

export default App;