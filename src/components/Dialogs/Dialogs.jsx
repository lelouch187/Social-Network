import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";


const Dialogs = ({messages, addMessage, textNewMessage, changeTextMessage, dialogs}) => {

    const dialogElements = dialogs.map (d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    const messagesElements = messages.map (m => <Message id={m.id} key={m.id} message={m.message} />)


    let addMessages = () => {
        addMessage()
    }

    let changeMessage = (e) => {
       let text = e.target.value
       changeTextMessage(text)
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
                       value={textNewMessage}
                       className="h-[70px] focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-xl leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                       type="text"
                       placeholder="Введите сообщение"/>
                <button onClick={addMessages}
                        className="inline-block float-right mt-[20px] hover:bg-red-400 group rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
                        type="button">Опубликовать
                </button>
            </form>
        </div>
    )
}

export default Dialogs