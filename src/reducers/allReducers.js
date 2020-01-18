import user_reducer from './user_reducer'
import {combineReducers} from redux
export const allReducers = combineReducers({
    user: user_reducer
})