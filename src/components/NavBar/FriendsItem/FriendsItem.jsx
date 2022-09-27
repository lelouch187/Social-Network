import ava from "../../../img/ava.jpg";


const FriendsItem = () => {
    return (
        <a className="flex flex-col items-center mr-[12px]" href="#">
            <img
                className="w-[50px]  rounded-full mr-[10px]"
                src={ava}
                alt="avatar"/>
            <div>Захар</div>
        </a>
    )
}

export default FriendsItem