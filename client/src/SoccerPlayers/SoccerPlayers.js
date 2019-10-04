import React, {Component} from 'react';


class SoccerPlayers extends Component{
        
    render(){
        return(
            <div>
                {this.props.players.map((player) => (
                <div className='card' key={player.id}>
                    <div className='cardInfo'>
                        <h2 className='name'>{player.name}</h2>
                        <h4 className='username'>Plays For:<strong id='play'>{player.country}</strong></h4>
                        <p>Number of Searches Appeared in:<strong id='play'>{player.searches}</strong></p>
                    </div>
                </div>
                ))}

            </div>
        )
    }
}


export default SoccerPlayers;
