import {combineReducers} from 'redux'
import amountReducer from './amountReducer'
import dataReducer from './dataReducer'

const reducers = combineReducers({
    amount:amountReducer,
    data:dataReducer
})

export default reducers