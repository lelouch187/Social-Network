import ava
    from "../../img/ava.jpg";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) =>{
    const path = "/dialogs/" + id;

    const activeColor = "text-orange-300";

    return(
        <div className="mb-[20px]">
        <NavLink className={({isActive}) => isActive? activeColor:undefined} to={path}>{name}</NavLink>
    </div>
    )
}

const Message = ({message, id}) =>{
    return(
        <div
            className="flex items-center mb-[60px]">
            <div
                className="h-[75px] w-[75px] mr-[35px] text-center">
                <img
                    className="rounded-full"
                    src={ava}
                    alt="avatar"/>
                <p className="mt-[5px]">Дмитрий</p>
            </div>
            <div
                className=" text-2xl">
                {message}
            </div>


        </div>
    )
}

const Dialogs = () => {

    const dialogsData = [
        {name:"Иван", id: 1},
        {name:"Александр", id: 2},
        {name:"Захар", id: 3}
    ]
    const dialogElements = dialogsData.map (dialog => <DialogItem name={dialog.name} id={dialog.id} />)



    const messagesData = [
        {message:"Привет", id:1},
        {message:"Дота?", id:2}
    ]
    const messagesElements = messagesData.map (message => <Message id={message.id} message={message.message} />)


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