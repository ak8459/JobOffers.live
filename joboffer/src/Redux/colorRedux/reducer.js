
const initialState = {
    colors: [],
    isLoading: false,
    isError: false
}

export const colorReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "GET_COLOR_REQUEST": {
            return {
                ...state,
                isLoading: true
            }
        }

        case "GET_COLOR_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                colors: payload
            }
        }

        case "GET_COLOR_FAILURE": {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state

    }
}