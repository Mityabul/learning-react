const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, как дела?', likesCount: 12},
                {id: 2, message: 'как тебе мой пост?', likesCount: 11},
                {id: 3, message: 'в ...', likesCount: 11},
                {id: 4, message: 'да да ', likesCount: 11}
            ],
            newPostText: 'Что у вас нового?'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Дима'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Виктор'},
                {id: 6, name: 'Валера'}
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Что нового?'},
                {id: 4, message: 'Привет'},
                {id: 5, message: 'Как дела?'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  
    },

    dispatch(action) { 
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;
// store - OOP