import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileReducer} from "./reducers/profile-reducer";
import {DialogsReducer} from "./reducers/dialogs-reducer";
import {UsersReducer} from "./reducers/users-reducer";
import {AuthReducer} from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppReducer} from "./reducers/app-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer
});
//const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store