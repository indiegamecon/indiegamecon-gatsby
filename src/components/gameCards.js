import React, { Component } from 'react'
import { getValidUrl } from '../utilities/getValidUrl'

export default class GameCards extends Component {
  render() {
    const games = this.props.games
    return (
      <div>
        {games.map(({ node: { data } }) => (
          <GameCard {...data} key={data.gameName} />
        ))}
        <hr />
      </div>
    )
  }
}

const GameCard = ({
  gameLink,
  gameName,
  teamName,
  gameDescription,
  teamMembers,
}) => {
  return (
    <div>
      <h3>
        <a
          href={getValidUrl(gameLink)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {gameName}
        </a>
      </h3>
      <h4 style={{ fontStyle: 'italic' }}>{teamName}</h4>
      <p>{gameDescription}</p>
      <p>Team Members: {teamMembers}</p>
    </div>
  )
}
