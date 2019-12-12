const ENDPOINT = 'https://rickandmortyapi.com/api/character/'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export function fetchCharacter(id, lag = 1500) {
  return fetch(`${ENDPOINT}${id}`)
    .then(res => res.json())
    .then(async data => {
      await delay(lag)
      return data
    })
}
