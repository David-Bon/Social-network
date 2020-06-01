import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "lorem ipsum", likes: 23},
                {id: 2, text: "lorem ipsum sitr nskwq", likes: 12},
                {id: 3, text: "djriq nfjzd qlssoe gntjd or eewfg s,rkvjt slnvje ", likes: 7},
                {id: 4, text: "but i'm here right now right now just city in a wow", likes: 59},
            ],
            newPostText: ''
        },

        dialogsPage: {
            peopleData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Viktor"},
                {id: 3, name: "Oleh"},
                {id: 4, name: "Sonya"},
                {id: 5, name: "Anatoliy"}
            ],
            messagesData: [
                {id: 1, message: "hi how are you?"},
                {id: 2, message: "i'm fine"},
                {id: 3, message: "let's go outside"},
                {id: 4, message: "no! Bill Gates create coronavirus!"},
                {id: 5, message: "maaan are you seriously?"}
            ],
            newMessageText: ''
        }

    },
    _RerenderEntireTree() {
        console.log('state updated')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._RerenderEntireTree = observer
    },

    dispatch(action) {
       ProfileReducer(this._state.profilePage, action);
       DialogsReducer(this._state.dialogsPage, action);
        this._RerenderEntireTree(this._state)
    }

};
export default store