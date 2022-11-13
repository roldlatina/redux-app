import React from 'react'

const PokemonListItem = ({ pokemon }) => {
  return (
    <div style={{ flex: 1, border: '1px solid black', padding: '1rem 2rem' }}>
      <div>{pokemon.name}</div>
    </div>
  )
}

export default PokemonListItem
