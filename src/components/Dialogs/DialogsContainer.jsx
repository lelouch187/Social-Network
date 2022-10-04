import React from "react";
import {
    addMessageActionCreator,
    changeMessageActionCreator
} from "../../redux/messages-page-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({store}) => {

    let state = store.getState().messagesPage

    let addMessage = () => {
        store.dispatch(addMessageActionCreator())
    }

    let changeMessage = (text) => {
        let action = changeMessageActionCreator(text)
        store.dispatch(action)
    }

    return(
        <Dialogs changeTextMessage={changeMessage} addMessage={addMessage} textNewMessage={state.textNewMessage} messages={state.messages} dialogs={state.dialogs} />
    )
}

export default DialogsContainer