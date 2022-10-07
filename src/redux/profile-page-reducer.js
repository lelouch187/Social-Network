const addPost = 'ADD-POST'
const changeTextPost = 'CHANGE-TEXT-POST'

let initialState = {
    posts: [
        {id: 1, message: "Го доту", likesCount: 6},
        {id: 2, message: "Привет", likesCount: 2},
    ],
    textNewPost:'',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost : {
            let newItemPost = {id: 3, message: state.textNewPost, likesCount: 0}
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newItemPost)
            stateCopy.textNewPost = ''
            return stateCopy
        }
        case changeTextPost :{
            let stateCopy = {...state}
            stateCopy.textNewPost = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (text) => ({type: changeTextPost, newText: text})

export default profilePageReducer