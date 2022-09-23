import bg from "../../img/bg.jpg";
import ava
    from "../../img/ava.jpg";
import Posts
    from "./Posts/Posts";

const Profile = () => {
    return (
        <div
            className=" col-span-8">
            <div>
                <img
                    className="h-[300px] w-[100%]"
                    src={bg}
                    alt="фон"/>
            </div>
            <div className="flex my-[20px]">
                <div>
                    <img className="h-[125px] w-[125px] mr-[30px]" src={ava} alt="avatar"/>
                </div>
                <div>
                    <h3 className="font-bold text-3xl mb-[20px]">Иван М.</h3>
                    <p className="mb-[7px]">День рождения: 2 сентября</p>
                    <p className="mb-[7px]">Город: Омск</p>
                    <p className="mb-[7px]">Образование: ОмГУПС</p>
                    <p className="mb-[7px]">
                        <a target="_blank" href="https://github.com/lelouch187">https://github.com/lelouch187</a>
                    </p>
                </div>
            </div>
            <Posts />
        </div>
    )
}

export default Profile