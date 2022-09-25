import {
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <div
            className="col-span-2 bg-slate-600 rounded">
            <nav
                className="py-[15px] px-[15px]">
                <ul className="text-center">
                    <li className="mt-[10px]">
                        <Link className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           to="/">Профиль</Link>
                    </li>
                    <li className="mt-[10px]">
                        <Link className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           to="/dialogs">Сообщения</Link>
                    </li>
                    <li className="mt-[10px]">
                        <Link className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           to="/news">Новости</Link>
                    </li>
                    <li className="mt-[10px]">
                        <Link className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           to="/music">Музыка</Link>
                    </li>
                    <li className="mt-[40px]">
                        <Link className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           to="/settings">Настройки</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar