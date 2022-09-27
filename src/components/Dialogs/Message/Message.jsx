import ava from "../../../img/ava.jpg";

const Message = ({message, id}) =>{
    return(
        <div
            className="flex items-center mb-[60px]">
            <div
                className="h-[75px] w-[75px] mr-[35px] text-center">
                <img
                    className="rounded-full"
                    src={ava}
                    alt="avatar"/>
                <p className="mt-[5px]">Дмитрий</p>
            </div>
            <div
                className=" text-2xl">
                {message}
            </div>
        </div>
    )
}

export default Message