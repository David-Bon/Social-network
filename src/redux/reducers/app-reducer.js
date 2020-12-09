export const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

let initialState = {
    initialized: false
};

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZE_SUCCESS:
            return {
                ...state, initialized: true
            };
        default:
            return state;
    }
};