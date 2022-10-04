import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {
    addMessageActionCreator,
    changeMessageActionCreator
} from "../../redux/messages-page-reducer";


const Dialogs = ({messagesPage, dispatch}) => {

    const dialogElements = messagesPage.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElements = messagesPage.messages.map (message => <Message id={message.id} message={message.message} />)


    let addMessage = () => {
        dispatch(addMessageActionCreator())
    }

    let changeMessage = (e) => {
       let text = e.target.value
        dispatch(changeMessageActionCreator(text))
    }

    return(
        <div className="col-span-8">
            <h2 className="font-bold text-3xl mb-[20px]">Диалоги</h2>
            <div className="flex">
                <div className="pr-[100px] border-solid border-r-4 border-white mr-[50px]">
                    {dialogElements}
                </div>
                <div className="flex flex-col">
                    {messagesElements}
                </div>
            </div>
            <form className="w-[100%] mt-[30px]">
                <input onChange={changeMessage}
                       value={messagesPage.textNewMessage}
                       className="h-[70px] focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-xl leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                       type="text"
                       placeholder="Введите сообщение"/>
                <button onClick={addMessage}
                        className="inline-block float-right mt-[20px] hover:bg-red-400 group rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
                        type="button">Опубликовать
                </button>
            </form>
        </div>
    )
}

export default Dialogs