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

export default DialogItem