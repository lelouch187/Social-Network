import {NavLink} from "react-router-dom";
import ava from "../../../img/ava.jpg";

const DialogItem = ({name, id}) =>{
    const path = "/dialogs/" + id;

    const activeColor = "text-orange-300";

    return(
        <div className="flex items-center mb-[20px]">
            <img
                className="w-[50px]  rounded-full mr-[10px]"
                src={ava}
                alt="avatar"/>
            <NavLink className={({isActive}) => isActive? activeColor:undefined} to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem