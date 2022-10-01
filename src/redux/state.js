let render

let state = {
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
}

export const addPost = () => {
    let newItemPost = {id: 3, message: state.profilePage.textNewPost, likesCount: 0}
    state.profilePage.posts.push(newItemPost)
    state.profilePage.textNewPost = ''
    render(state)
}

export const changeTextPost = (text) => {
    state.profilePage.textNewPost = text
    render(state)
}

export const addMessage = () => {
    let newItemMessage = {message: state.messagesPage.textNewMessage, id: 3}
    state.messagesPage.messages.push(newItemMessage)
    state.messagesPage.textNewMessage = ''
    render(state)
}

export const changeTextMessage = (text) => {
    state.messagesPage.textNewMessage = text
    render(state)
}

export const subscribe = (observer) => {
    render = observer
}



export default state