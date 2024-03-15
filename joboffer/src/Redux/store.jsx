import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { PlanetReducer } from './planetRedux/reducer'
import { colorReducer } from './colorRedux/reducer'
import { shapeReducer } from './shapesRedux/reducer'
import { sizeReducer } from './sizeRedux/reducer'

const rootReducer = combineReducers({
    PlanetReducer,
    colorReducer,
    shapeReducer,
    sizeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))