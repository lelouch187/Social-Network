import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = ({messagesPage}) => {

    const dialogElements = messagesPage.dialogs.map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    const messagesElements = messagesPage.messages.map (message => <Message id={message.id} message={message.message} />)

    return(
        <div>
            <h2 className="font-bold text-3xl mb-[20px]">Диалоги</h2>
            <div className="flex">
                <div className="pr-[100px] border-solid border-r-4 border-white mr-[50px]">
                    {dialogElements}
                </div>
                <div className="flex flex-col">
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs