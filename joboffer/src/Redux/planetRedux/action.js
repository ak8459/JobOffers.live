import { axiosUtils } from "../../utils"
import { GET_PLANET_FAILURE, GET_PLANET_REQUEST, GET_PLANET_SUCCESS } from "../actionTypes"

export const getPlanets = (paramObj) => {

    return (dispatch) => {
        dispatch({ type: GET_PLANET_REQUEST })
        axiosUtils(`/planets?${paramObj}`, 'GET')
            .then((response) => {
                dispatch({ type: GET_PLANET_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: GET_PLANET_FAILURE, payload: error })
            })
    }

}