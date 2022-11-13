import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../redux/slice'
import PokemonListItem from './PokemonListItem'

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons.list)
  const isLoading = useSelector((state) => state.pokemons.isLoading)
  const isError = useSelector((state) => state.pokemons.isError)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  if (isLoading) return 'Loading...'
  if (isError) return 'Error, please try again'

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <PokemonListItem pokemon={pokemon} key={index} />
      ))}
    </div>
  )
}

export default PokemonList
