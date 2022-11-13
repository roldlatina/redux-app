import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
}
const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons(state) {
      state.isLoading = true
      state.isError = false
    },
    getPokemonsSuccess(state, action) {
      state.list = action.payload.data
      state.isLoading = false
    },
    getPokemonsError(state) {
      state.isLoading = false
      state.isError = true
    },
  },
})

export const { getPokemons, getPokemonsSuccess, getPokemonsError } =
  pokemonSlice.actions

export default pokemonSlice.reducer
