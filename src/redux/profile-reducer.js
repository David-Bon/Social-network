const ADD_POST = "ADD-POST";
let max_id = 5;
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text});

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: max_id++, text: state.newPostText, likes: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.text;
            return state;
    }
};