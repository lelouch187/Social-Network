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
        switch (action.type) {
            case 'ADD-POST' :
                let newItemPost = {id: 3, message: this._state.profilePage.textNewPost, likesCount: 0}
                this._state.profilePage.posts.push(newItemPost)
                this._state.profilePage.textNewPost = ''
                this._render(this._state)
                break
            case 'CHANGE-TEXT-POST' :
                this._state.profilePage.textNewPost = action.text
                this._render(this._state)
                break
            case 'ADD-MESSAGE' :
                let newItemMessage = {message: this._state.messagesPage.textNewMessage, id: 3}
                this._state.messagesPage.messages.push(newItemMessage)
                this._state.messagesPage.textNewMessage = ''
                this._render(this._state)
                break
            case 'CHANGE-TEXT-MESSAGE' :
                this._state.messagesPage.textNewMessage = action.text
                this._render(this._state)
            }
        },
    }
