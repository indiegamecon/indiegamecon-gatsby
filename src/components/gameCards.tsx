import React from 'react'
import { getValidUrl } from '../utilities/getValidUrl'
import styled from 'styled-components'

export interface GameProps {
  gameName: string
  gameLink: string
  teamName: string
  gameDescription: string
  teamMembers: string
  confirmed: boolean
}

const Divider = styled.hr`
  background-image: linear-gradient(90deg, white, transparent, transparent);
  height: 1px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
`
export const GameCards: React.FC<{ games: GameProps[] }> = ({ games }) => {
  return (
    <div>
      {games.map(game => (
        <GameCard {...game} key={game.gameName} />
      ))}
      <hr />
    </div>
  )
}

const GameCard: React.FC<GameProps> = ({
  gameLink,
  gameName,
  teamName,
  gameDescription,
  teamMembers,
}) => {
  return (
    <div>
      <h3>
        {gameLink ? (
          <a
            href={getValidUrl(gameLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {gameName}
          </a>
        ) : (
          { gameName }
        )}
      </h3>
      <h4 style={{ fontStyle: 'italic' }}>{teamName}</h4>
      <p>{gameDescription}</p>
      <p>Team Members: {teamMembers}</p>
      <Divider />
    </div>
  )
}
