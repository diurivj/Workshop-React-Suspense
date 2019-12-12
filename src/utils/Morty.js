import React from 'react'
import { Card } from 'antd'
import { fetchCharacter } from '.'

let morty

const fetchMorty = fetchCharacter(2, 5000).then(r => (morty = r))

export default function Morty() {
  if (!morty) {
    throw fetchMorty
  }
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={morty.name} src={morty.image} />}
    >
      <Card.Meta title={morty.name} description={morty.species} />
    </Card>
  )
}
