import {INITIALIZE_SUCCESS} from "../reducers/app-reducer";
import {getAuthThunkCreator} from "./auth-actions";

export const initializedSuccess = () => ({type: INITIALIZE_SUCCESS});

export const initializeApp = () => async (dispatch) => {

    let promise = dispatch(getAuthThunkCreator())
    //dispatch something else
    //dispatch something else

    Promise.all([promise]).then(() => dispatch(initializedSuccess()))
}