
const initialState = {
    colors: [],
    isError: false
}

export const colorReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "GET_COLOR_REQUEST": {
            return {
                ...state,
            }
        }

        case "GET_COLOR_SUCCESS": {
            return {
                ...state,
                colors: payload
            }
        }

        case "GET_COLOR_FAILURE": {
            return {
                ...state,
                isError: true
            }
        }
        default: return state

    }
}