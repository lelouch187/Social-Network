import {
    NavLink
} from "react-router-dom";

const NavBar = () => {

    let activClassName = "block rounded-full bg-slate-50 text-[black]";
    let defClassName = "block hover:bg-slate-50 hover:text-[black] rounded-full";

    return (
        <div
            className="col-span-2 bg-slate-600 rounded">
            <nav
                className="py-[15px] px-[15px]">
                <ul className="text-center">
                    <li className="mt-[10px]">
                        <NavLink className={({isActive}) =>isActive?activClassName:defClassName}
                           to="/profile">Профиль</NavLink>
                    </li>
                    <li className="mt-[10px]">
                        <NavLink className={({isActive}) =>isActive?activClassName:defClassName}
                           to="/dialogs">Сообщения</NavLink>
                    </li>
                    <li className="mt-[10px]">
                        <NavLink className={({isActive}) =>isActive?activClassName:defClassName}
                           to="/news">Новости</NavLink>
                    </li>
                    <li className="mt-[10px]">
                        <NavLink className={({isActive}) =>isActive?activClassName:defClassName}
                           to="/music">Музыка</NavLink>
                    </li>
                    <li className="mt-[40px]">
                        <NavLink className={({isActive}) =>isActive?activClassName:defClassName}
                           to="/settings">Настройки</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar