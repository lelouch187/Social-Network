import ava
    from "../../img/ava.jpg";
import {NavLink} from "react-router-dom";

const DialogItem = ({name, id}) =>{
    const path = "/dialogs/" + id;

    return(
        <div className="mb-[20px]">
        <NavLink to={path}>{name}</NavLink>
    </div>
    )
}

const Message = () =>{
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
                Привет
            </div>


        </div>
    )
}

const Dialogs = () => {

    return(
        <div>
            <h2 className="font-bold text-3xl mb-[20px]">Диалоги</h2>
            <div className="flex">
                <div className="pr-[100px] border-solid border-r-4 border-white mr-[50px]">
                    <DialogItem name="Иван" id="1" />
                    <DialogItem name="Александр" id="2" />
                    <DialogItem name="Захар" id="3" />
                </div>
                <div className="flex flex-col">
                  <Message />
                  <Message />
                </div>
            </div>
        </div>
    )
}

export default Dialogs