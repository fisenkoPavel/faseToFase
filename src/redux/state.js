import {rerenderEntireTree} from '../render';

let state = {

    profilePage: {
        posts: [
            {id:1, message: 'Мой первый пост', like: 14},
            {id:2, message: 'Мой второй пост', like: 1},
            {id:3, message: 'Мой третий пост', like: 4},
            {id:4, message: 'Мой четвертый пост', like: 105},
            {id:5, message: 'Мой пятый пост', like: 21}
        ],
        newPostText: 'Введите сообщение'
    },

    messagesPage: {
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Как дела??'},
            {id: 3, message: 'Чем занимаешься??'},
            {id: 4, message: '))))'}
        ],
    
        dialogs: [
            {id: 1, name: 'Павел'},
            {id: 2, name: 'Дмитрий'},
            {id: 3, name: 'Алексей'},
            {id: 4, name: 'Роман'}
        ]
    },
    friendsNavbar: {
        friends: [
            {id: 1, name: 'Павел'},
            {id: 2, name: 'Дмиртий'},
            {id: 3, name: 'Роман'}
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;