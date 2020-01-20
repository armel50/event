import user_reducer from './user_reducer'
import {combineReducers} from 'redux'
 const allReducers = combineReducers({
    user: user_reducer
})
export default allReducers