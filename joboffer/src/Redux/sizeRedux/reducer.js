const initialState = {
    sizes: [],
    isError: false
}

export const sizeReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "GET_SIZE_REQUEST": {
            return {
                ...state,
            }
        }
        case "GET_SIZE_SUCCESS": {
            return {
                ...state,
              
                sizes: payload
            }
        }
        case "GET_SIZE_FAILURE": {
            return {
                ...state,
                isError: true

            }
        }
        default: return state
    }
}