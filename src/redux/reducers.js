import { combineReducers } from 'redux';
import { ADD_COUNT, DEL_COUNT, ADD_ASYNC_COUNT } from './action-types'


function counter(state = 9, action) {
    switch (action.type) {
        case ADD_COUNT:
            return state + 1
        case DEL_COUNT:
            return state - 1
        default:
            return state
    }
}

const initAddress = { name: '北京' };
function homeReducer(state = initAddress, action) {
    switch (action.type) {
        case ADD_ASYNC_COUNT:
            return action.data
        default:
            return state
    }
}
// export default counter
// export default homeReducer

export default combineReducers({
    counter,
    homeReducer
})