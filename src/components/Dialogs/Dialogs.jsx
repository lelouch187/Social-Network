import ava
    from "../../img/ava.jpg";

const Dialogs = () => {
    return(
        <div>
            <h2 className="font-bold text-3xl mb-[20px]">Диалоги</h2>
            <div
                className="flex">
                <div
                    className="pr-[100px] border-solid border-r-4 border-white mr-[50px]">
                    <p className="mb-[20px]">Андрей</p>
                    <p className="mb-[20px]">Дмитрий</p>
                    <p className="mb-[20px]">Саша</p>
                </div>
                <div
                    className="flex flex-col">
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
                            Привет
                        </div>


                    </div>
                    <div
                        className="flex items-center mb-[60px]">
                        <div
                            className="h-[75px] w-[75px] mr-[35px] text-center">
                            <img
                                className="rounded-full"
                                src={ava}
                                alt="avatar"/>
                            <p className="mt-[5px]">Я</p>
                        </div>
                        <div
                            className=" text-2xl">
                            Здарова
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Dialogs