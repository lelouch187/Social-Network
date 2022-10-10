import './App.css';
import Header from "./components/Hader/Header";
import Profile
    from "./components/Profile/Profile";
import News
    from "./components/News/News";
import Music
    from "./components/Music/Music";
import Settings
    from "./components/Settings/Settings";
import {
    Routes,
    Route
} from "react-router-dom";
import DialogsContainer
    from "./components/Dialogs/DialogsContainer";
import NavBarContainer
    from "./components/NavBar/NavBarContainer";
import FindUsersContainer
    from "./components/FindUsers/FindUsersContainer";


const App =() => {
  return (
      <div
          className="min-h-[100vh] bg-slate-900 font-sans text-xl subpixel-antialiased text-[#fff] tracking-wider">
          <div
              className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <Header/>
              <NavBarContainer />
              <Routes>
                  <Route path="/profile"
                         element={<Profile />}/>
                  <Route path="dialogs/*"
                         element={
                             <DialogsContainer />}/>
                  <Route path="/news"
                         element={<News/>}/>
                  <Route path="/music"
                         element={<Music/>}/>
                  <Route path="/users"
                         element={<FindUsersContainer/>}/>
                  <Route path="/settings"
                         element={<Settings/>}/>
              </Routes>
          </div>
      </div>
  );
}
export default App;
