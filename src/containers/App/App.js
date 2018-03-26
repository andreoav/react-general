import React, { Component } from 'react';
import ScoreGrid from '../../components/ScoreGrid/ScoreGrid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  addPlayer = () => {
    const newPlayer = {
      score: 0,
      name: `Player ${this.state.players.length + 1}`,
    };

    this.setState({
      players: [...this.state.players, newPlayer],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addPlayer}>Add Player</button>
        <ScoreGrid players={this.state.players} />
      </div>
    );
  }
}

export default App;
