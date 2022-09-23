import ava
    from "../../../../img/ava.jpg";


const Post = ({message, likes}) => {
    return (
        <div className="flex mb-[20px] items-center">
            <div>
                <img className="h-[75px] w-[75px] mr-[35px] rounded-full" src={ava} alt="avatar"/>
            </div>
    <div className="w-[100%] flex justify-between">
            <span className="text-2xl">{message}</span>
            <span className="text-2xl">Нравится: {likes}</span>
        </div>
        </div>
    )
}

export default Post