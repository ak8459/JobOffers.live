import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { PlanetReducer } from './planetRedux/reducer'
import { colorReducer } from './colorRedux/reducer'
const rootReducer = combineReducers({
    PlanetReducer,
    colorReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))