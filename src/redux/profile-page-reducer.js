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
        case addPost :
            let newItemPost = {id: 3, message: state.textNewPost, likesCount: 0}
            state.posts.push(newItemPost)
            state.textNewPost = ''
            return state
        case changeTextPost :
            state.textNewPost = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = (text) => ({type: 'CHANGE-TEXT-POST', newText: text})

export default profilePageReducer