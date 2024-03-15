const initialState = {
    Planet: [],
    isLoading: false,
    isError: false
}


export const PlanetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PLANET_REQUEST": {
            return {
                ...state,
            }
        }
        case "GET_PLANET_SUCCESS": {
            return {
                ...state,
                Planet: action.payload
            }
        }
        case "GET_PLANET_FAILURE": {
            return {
                ...state,
                isError: true
            }
        }
        default: {
            return state
        }

    }
}

