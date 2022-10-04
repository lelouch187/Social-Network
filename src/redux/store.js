import profilePageReducer
    from "./profile-page-reducer";
import messagesPageReducer
    from "./messages-page-reducer";
import sideBarReducer from "./side-bar-reducer";

export const store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message: "Го доту", likesCount: 6},
                {id: 2, message: "Привет", likesCount: 2},
            ],
            textNewPost:'',
        },
        messagesPage: {
            dialogs: [
                {name:"Иван", id: 1},
                {name:"Александр", id: 2},
                {name:"Захар", id: 3}
            ],
            messages: [
                {message:"Привет", id:1},
                {message:"Дота?", id:2}
            ],
            textNewMessage:'',
        },
        sideBar: {
            friends: [
                {name:"Иван", id: 1},
                {name:"Александр", id: 2},
                {name:"Захар", id: 3}
            ]
        },
    },
    _render() {},

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._render = observer
    },

    dispatch (action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._render(this._state)
        },
    }


