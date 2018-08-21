import { createStore, combineReducers } from 'redux'
import listReducer from './listReducer'

const reuder = combineReducers({
    list: listReducer
})

const store = createStore(reuder);
export default store;