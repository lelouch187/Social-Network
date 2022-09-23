const NavBar = () => {
    return (
        <div
            className="col-span-2 bg-slate-600 rounded">
            <nav
                className="py-[15px] px-[15px]">
                <ul className="text-center">
                    <li className="mt-[10px]">
                        <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           href="src/components/NavBar/NavBar#">Профиль</a>
                    </li>
                    <li className="mt-[10px]">
                        <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           href="src/components/NavBar/NavBar#">Сообщения</a>
                    </li>
                    <li className="mt-[10px]">
                        <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           href="src/components/NavBar/NavBar#">Новости</a>
                    </li>
                    <li className="mt-[10px]">
                        <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           href="src/components/NavBar/NavBar#">Музыка</a>
                    </li>
                    <li className="mt-[40px]">
                        <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                           href="src/components/NavBar/NavBar#">Настройки</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar