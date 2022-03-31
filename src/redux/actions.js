
import { ADD_COUNT, DEL_COUNT, ADD_ASYNC_COUNT } from './action-types'

export const addCount = (data) => ({ type: ADD_COUNT, data })
export const delCount = (data) => ({ type: DEL_COUNT, data })
const getCount = (data) => ({ type: ADD_ASYNC_COUNT, data })


export const addCountAsync = (data) => {
    return dispatch => {
        setTimeout(() => {
            // 接口数据
            dispatch(getCount(data))
        }, 1000)
    }
}