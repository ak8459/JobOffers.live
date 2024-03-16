
import { axiosUtils } from "../../utils"
import { GET_COLOR_FAILURE, GET_COLOR_REQUEST, GET_COLOR_SUCCESS } from "../actionTypes"

export const getColors = () => {
    return (dispatch) => {
        dispatch({ type: GET_COLOR_REQUEST })
        axiosUtils('/colors', 'GET')
            .then((response) => {
                dispatch({ type: GET_COLOR_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: GET_COLOR_FAILURE, payload: error })
            })
    }
}