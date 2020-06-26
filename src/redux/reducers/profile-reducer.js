export const ADD_POST = "ADD_POST";
let max_id = 5;
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
        posts: [
            {id: 1, text: "lorem ipsum", likes: 23},
            {id: 2, text: "lorem ipsum sitr nskwq", likes: 12},
            {id: 3, text: "djriq nfjzd qlssoe gntjd or eewfg s,rkvjt slnvje ", likes: 7},
            {id: 4, text: "but i'm here right now right now just city in a wow", likes: 59},
        ],
        newPostText: '',
    profile: null
};
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: max_id++, text: state.newPostText, likes: 0};
            return {
                ...state, posts: [...state.posts, newPost], newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.payload
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.payload
            };
        default:
            return state;
    }

};