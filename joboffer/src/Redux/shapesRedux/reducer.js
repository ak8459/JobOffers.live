

const initialState = {
    shapes: [],
    isLoading: false,
    isError: false
}

export const shapeReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "GET_SHAPE_REQUEST": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "GET_SHAPE_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                shapes: payload
            }
        }
        case "GET_SHAPE_FAILURE": {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state
    }

}