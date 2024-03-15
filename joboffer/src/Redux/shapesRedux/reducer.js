

const initialState = {
    shapes: [],
    isError: false
}

export const shapeReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case "GET_SHAPE_REQUEST": {
            return {
                ...state,

            }
        }
        case "GET_SHAPE_SUCCESS": {
            return {
                ...state,

                shapes: payload
            }
        }
        case "GET_SHAPE_FAILURE": {
            return {
                ...state,
                isError: true
            }
        }
        default: return state
    }

}