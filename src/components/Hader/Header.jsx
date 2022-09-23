import logo from '../../img/logo.png';

const Header = () => {
    return (
        <header
            className="col-span-10 bg-slate-600 h-[100px] rounded">
            <div className="h-[50px] w-[50px] ml-[15px] mt-[15px]">
                <img src={logo} alt="лого"/>
            </div>
        </header>
    )
}
export default Header