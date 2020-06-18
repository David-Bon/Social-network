import {combineReducers, createStore} from 'redux';
import {ProfileReducer} from "./reducers/profile-reducer";
import {DialogsReducer} from "./reducers/dialogs-reducer";
import {UsersReducer} from "./reducers/users-reducer";

let reducers = combineReducers({profilePage: ProfileReducer, dialogsPage: DialogsReducer, UsersReducer});

const store = createStore(reducers);

export default store