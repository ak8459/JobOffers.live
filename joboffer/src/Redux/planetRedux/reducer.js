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
                isLoading: true
            }
        }
        case "GET_PLANET_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                Planet: action.payload
            }
        }
        case "GET_PLANET_FAILURE": {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: {
            return state
        }

    }
}

