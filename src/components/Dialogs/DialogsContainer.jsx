import React from "react";
import {
    addMessageActionCreator,
    changeMessageActionCreator
} from "../../redux/messages-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) =>({
    textNewMessage: state.messagesPage.textNewMessage,
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
})
const mapDispatchToProps = (dispatch) =>({
    changeTextMessage: (text) => {
        let action = changeMessageActionCreator(text)
        dispatch(action)
    },
    addMessage: () => {
        let action = addMessageActionCreator()
        dispatch(action)
    }
})
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer