import reducers from './slice'
import saga from './sagas'
import { configureStore  } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    pokemons: reducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga)