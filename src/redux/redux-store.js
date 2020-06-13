import {combineReducers, createStore} from 'redux';
import {ProfileReducer} from "./reducers/profile-reducer";
import {DialogsReducer} from "./reducers/dialogs-reducer";

let reducers = combineReducers({profilePage: ProfileReducer, dialogsPage: DialogsReducer});

const store = createStore(reducers);

export default store