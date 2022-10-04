const addMessage = 'ADD-MESSAGE'
const changeTextMessage = 'CHANGE-TEXT-MESSAGE'

let initialState = {
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
}

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage :
            let newItemMessage = {message: state.textNewMessage, id: 3}
            state.messages.push(newItemMessage)
            state.textNewMessage = ''
            return state
        case changeTextMessage :
            state.textNewMessage = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const changeMessageActionCreator = (text) => ({type: 'CHANGE-TEXT-MESSAGE', newText: text})

export default messagesPageReducer