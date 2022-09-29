import {render} from "../render";

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
        ]
    },
    sideBar: {
        friends: [
            {name:"Иван", id: 1},
            {name:"Александр", id: 2},
            {name:"Захар", id: 3}
        ]
    },
}

export let addPost = () => {
    let newItemPost = {id: 3, message: state.profilePage.textNewPost, likesCount: 0}
    state.profilePage.posts.push(newItemPost)
    state.profilePage.textNewPost = ''
    render(state)
}

export let changeTextPost = (text) => {
    state.profilePage.textNewPost = text
    render(state)
}



export default state