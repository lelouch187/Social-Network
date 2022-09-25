import Post
    from "./Post/Post";

const Posts = ({id, message,likesCount}) => {

    const postsData = [
        {id: 1, message: "Го доту", likesCount: 6},
        {id: 2, message: "Привет", likesCount: 2},
    ]

    return (
        <div>
            <div
                className="pb-[80px] ml-[5px]">
                <h3 className="font-bold text-3xl mb-[20px]">Посты</h3>
                <form>
                    <input
                        className="h-[70px] focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-xl leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                        type="text"
                        placeholder="Твои новости ..."/>
                    <button
                        className="inline-block float-right mt-[20px] hover:bg-red-400 group rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
                        type="submit">Опубликовать
                    </button>
                </form>
            </div>
            <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        </div>
    )
}
export default Posts