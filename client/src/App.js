import React from 'react';
import axios from 'axios';
import './App.css';
import SoccerPlayers from './SoccerPlayers/SoccerPlayers';


export default class Soccer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response=>{
        debugger
        this.setState({ 
          players: response.data,
        });
        debugger
      })

  }

  render() {
    return (
      <div className='container'>
        <h1 className='intro'>Female Soccer Players Searches</h1>
        <SoccerPlayers players={this.state.players}/>
      </div>
    );
  }
}
