import React from 'react'
import { Card } from 'antd'
import { fetchCharacter } from '../utils'

let rick

const fetchRick = fetchCharacter(1).then(r => (rick = r))

export default function Rick() {
  if (!rick) {
    throw fetchRick
  }
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={rick.name} src={rick.image} />}
    >
      <Card.Meta title={rick.name} description={rick.species} />
    </Card>
  )
}

