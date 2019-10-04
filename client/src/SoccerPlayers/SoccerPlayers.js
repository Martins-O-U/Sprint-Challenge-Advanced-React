import React, {Component} from 'react';


class SoccerPlayers extends Component{
        
    render(){
        return(
            <div>
                {this.props.players.map((player) => (
                <div className='card' key={player.id}>
                    <div className='cardInfo'>
                        <h2 className='name'>{player.name}</h2>
                        <h4 className='username'><i>{player.country}</i></h4>
                        <p><strong>Location:</strong> {player.searches}</p>
                    </div>
                </div>
                ))}

            </div>
        )
    }
}


export default SoccerPlayers;
