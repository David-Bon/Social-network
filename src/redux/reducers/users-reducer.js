export const ON_TOGGLE_FOLLOW = "ON_TOGGLE_FOLLOW";
export const SET_USERS = "SET_USERS";
let initialState = {
    users: [
        {id: 1, name: "Dima K.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 2, name: "Alex B.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 3, name: "Vlad B.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 4, name: "Mark Z.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 5, name: "Michael B.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 6, name: "Niko M.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}},
        {id: 7, name: "Franklin K.", photoUrl: 'https://www.meme-arsenal.com/memes/a9e0549fb28534ed1841202912114913.jpg', followed: true, status: "я хочу пиццы", location: {country: 'Donbass', city: 'Ukulele'}}
    ],
};
export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_TOGGLE_FOLLOW:
            const userIdx = state.users.findIndex(item => item.id === action.payload);
            const userItem = state.users[userIdx];
            const newUsersItem = {...userItem, ['followed'] : !userItem['followed']};
            const newUsersArray = [
                ...state.users.slice(0, userIdx), newUsersItem, ...state.users.slice(userIdx + 1)];
            return {...state, users: newUsersArray};
            default:
            return state;
    }
};

export default UsersReducer