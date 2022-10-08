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
            return {...state,
                posts: [...state.posts, newItemPost],
                textNewPost: ''}


        case changeTextPost :
            return {...state,
                textNewPost : action.newText}

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const changePostActionCreator = (text) => ({type: changeTextPost, newText: text})

export default profilePageReducer