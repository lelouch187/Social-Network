import './App.css';
import logo from './img/logo.png';
import bg from './img/bg.jpg';
import ava from './img/ava.jpg';

const App =() => {
  return (
      <div className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
          <div
              className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <div
                  className="col-span-10 bg-slate-600 h-[100px] rounded">
                  <header className="h-[50px] w-[50px] ml-[15px] mt-[15px]">
                  <img src={logo} alt="лого"/>
                  </header>
              </div>
              <div
                  className="col-span-2 bg-slate-600 rounded">
                  <nav
                      className="py-[15px] px-[15px]">
                      <ul className="text-center">
                          <li className="mt-[10px]">
                              <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                                 href="#">Профиль</a>
                          </li>
                          <li className="mt-[10px]">
                              <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                                 href="#">Сообщения</a>
                          </li>
                          <li className="mt-[10px]">
                              <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                                 href="#">Новости</a>
                          </li>
                          <li className="mt-[10px]">
                              <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                                 href="#">Музыка</a>
                          </li>
                          <li className="mt-[40px]">
                              <a className="block hover:bg-slate-50 hover:text-[black] rounded-full"
                                 href="#">Настройки</a>
                          </li>
                      </ul>
                  </nav>
              </div>
              <div
                  className="col-span-8">
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
                          <p className="mb-[7px]">День рождение: 2 сентября</p>
                          <p className="mb-[7px]">Город: Омск</p>
                          <p className="mb-[7px]">Образование: ОмГУПС</p>
                          <p className="mb-[7px]">
                              <a href="https://github.com/lelouch187">https://github.com/lelouch187</a>
                          </p>
                      </div>
                  </div>
                  <div className="pb-[80px] ml-[5px]">
                      <h3 className="font-bold text-3xl mb-[20px]">Посты</h3>
                      <form >
                          <input className="h-[70px] focus:ring-2 focus:ring-red-500 focus:outline-none appearance-none w-full text-xl leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" placeholder="Твои новости ..."/>
                          <button className="inline-block float-right mt-[20px] hover:bg-red-400 group rounded-md bg-red-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm" type="submit">Опубликовать</button>
                      </form>
                  </div>
                  <div className="flex items-center">
                      <div>
                          <img className="h-[75px] w-[75px] mr-[15px] rounded-full" src={ava} alt="avatar"/>
                      </div>
                          <p className="text-2xl">Го доту</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
