import React, { Component } from 'react'

export default class GameCards extends Component {
  render() {
    const games = this.props.games
    console.log(games)
    return (
      <div>
        {games.map(({node: { data }}) => (
          <GameCard {...data} key={data.gameName}/>
        ))}
      </div>
    )
  }
}

const GameCard = props => (
  <div>
    <h3>{props.gameName}</h3>
    <h4>{props.teamName}</h4>
    <p>{props.gameDescription}</p>
    <p>Team Members: {props.teamMembers}</p>
  </div>
)