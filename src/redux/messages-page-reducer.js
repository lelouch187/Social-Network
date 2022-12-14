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
            return{...state,
                messages: [...state.messages, newItemMessage],
                textNewMessage: ''}
        case changeTextMessage :
            return{...state,
            textNewMessage: action.newText
             }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: addMessage})
export const changeMessageActionCreator = (text) => ({type: changeTextMessage, newText: text})

export default messagesPageReducer