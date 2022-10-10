import ava from "../../img/ava.jpg";

const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{fullName:"Антон С.",photo: ava,followed: false, status:"Всем прив",location:{country:"Россия",city:"Новосибирск"}, id: 1},
            {fullName:"Захар Н.", photo: ava,followed: true, status:"На работе 24/7",location:{country:"Россия",city:"Барнаул"}, id: 2},
            {fullName:"Александр Е.", photo: ava,followed: true, status:"Го доту",location:{country:"Россия",city:"Ишим"}, id: 3},
        ])}

    return <div className="col-span-8">
        {props.users.map(u => <div
            className="border-solid border-b-2 border-slate-600 flex py-[25px] items-center"
            key={u.id}>
            <div className="px-[35px]">
                <img
                    className="h-[75px] w-[75px] rounded-full mx-auto"
                    src={u.photo}
                    alt="avatar"/>
                {u.followed ?
                    <button onClick={()=>{props.unfollow(u.id)}}
                        className="inline-block w-[100px] float-right mt-[20px] hover:bg-sky-400 group rounded-md bg-sky-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
                        type="button">Подписан
                    </button> :
                    <button onClick={()=>{props.follow(u.id)}}
                        className="inline-block w-[100px] float-right mt-[20px] hover:bg-red-400 group rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
                        type="button">Подписаться
                    </button>
                }
            </div>
            <div
                className="w-[100%] flex justify-between pr-[15px]">
                <div className=" flex flex-col ">
                    <p className="text-2xl mb-[20px]">{u.fullName}</p>
                    <p className="text-xl italic text-slate-400">{u.status}</p>
                </div>
                <div className="text-2xl text-right">
                    <p>{u.location.city},</p>
                    <p>{u.location.country}</p>
                </div>
            </div>
        </div>)
        }
    </div>
}

export default FindUsers