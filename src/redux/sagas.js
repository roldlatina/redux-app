import { all, put, takeEvery } from 'redux-saga/effects'
import { fetchPokemons } from '../api'
import {  getPokemons, getPokemonsError, getPokemonsSuccess } from './slice'

function* getPokemonsData() {
  try {
    const response = yield fetchPokemons()
    yield put(getPokemonsSuccess({ data: response.results }))
  } catch (error) {
    yield put(getPokemonsError(error))
  }
}

export function* watchGetPokemons() {
  yield takeEvery(getPokemons().type, getPokemonsData)
}

function* saga() {
  yield all([watchGetPokemons()])
}

export default saga
