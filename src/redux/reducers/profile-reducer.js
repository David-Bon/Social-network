export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
let max_id = 5;

let initialState = {
    posts: [
        {id: 1, text: "lorem ipsum", likes: 23},
        {id: 2, text: "lorem ipsum sitr nskwq", likes: 12},
        {id: 3, text: "djriq nfjzd qlssoe gntjd or eewfg s,rkvjt slnvje ", likes: 7},
        {id: 4, text: "but i'm here right now right now just city in a wow", likes: 59},
    ],
    profile: null,
    status: '',
};
export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: max_id++, text: action.payload, likes: 0};
            return {
                ...state, posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.payload
            };

        case SET_STATUS:
            return {
                ...state, status: action.payload
            }
        default:
            return state;
    }

};