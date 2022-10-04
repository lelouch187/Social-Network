const addPost = 'ADD-POST'
const changeTextPost = 'CHANGE-TEXT-POST'

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case addPost :
            let newItemPost = {id: 3, message: state.textNewPost, likesCount: 0}
            state.posts.push(newItemPost)
            state.profilePage.textNewPost = ''
            return state
        case changeTextPost :
            state.profilePage.textNewPost = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = (text) => ({type: 'CHANGE-TEXT-POST', newText: text})

export default profilePageReducer