import { axiosUtils } from "../../utils";
import { GET_SIZE_FAILURE, GET_SIZE_REQUEST, GET_SIZE_SUCCESS } from "../actionTypes";
export const  getSizes = () => {
    return (dispatch) => {
        dispatch({ type: GET_SIZE_REQUEST })
        axiosUtils('/sizes', 'GET', null, null)
            .then((response) => {
                dispatch({ type: GET_SIZE_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: GET_SIZE_FAILURE, payload: error })
            })
    }
}