
import { axiosUtils } from "../../utils";
import { GET_SHAPE_REQUEST, GET_SHAPE_SUCCESS, GET_SHAPE_FAILURE } from "../actionTypes";
export const getShapes = () => {
    return (dispatch) => {
        dispatch({ type: GET_SHAPE_REQUEST })
        axiosUtils('/shapes', 'GET')
            .then((response) => {
                dispatch({ type: GET_SHAPE_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: GET_SHAPE_FAILURE, payload: error })
            })
    }
}