import ava
    from "../../../../img/ava.jpg";

const Post = () => {
    return (
        <div className="mb-[20px] flex items-center">
            <div>
                <img className="h-[75px] w-[75px] mr-[15px] rounded-full" src={ava} alt="avatar"/>
            </div>
            <p className="text-2xl">Го доту</p>

        </div>
    )
}

export default Post