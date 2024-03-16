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
                Planet: action.payload,
                isLoading: false
            }
        }
        case "GET_PLANET_FAILURE": {
            return {
                ...state,
                isError: true,
                isLoading: false

            }
        }
        default: {
            return state
        }

    }
}

