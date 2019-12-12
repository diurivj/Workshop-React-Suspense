import React from 'react'
import { Card } from 'antd'
import { fetchCharacter } from '../utils'

let summer

const fetchSummer = fetchCharacter(3).then(r => (summer = r))

export default function Summer() {
  if (!summer) {
    throw fetchSummer
  }
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={summer.name} src={summer.image} />}
    >
      <Card.Meta title={summer.name} description={summer.species} />
    </Card>
  )
}

