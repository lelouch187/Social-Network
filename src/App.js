import './App.css';
import Header from "./components/Hader/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile
    from "./components/Profile/Profile";
import Dialogs
    from "./components/Dialogs/Dialogs";
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

const App =({state, dispatch}) => {
  return (
          <div
              className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <Header/>
              <NavBar sideBar={state.sideBar}/>
              <Routes>
                  <Route path="/profile" element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                  <Route path="dialogs/*" element={<Dialogs messagesPage={state.messagesPage} dispatch={dispatch} />}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>
              </Routes>
          </div>
  );
}
export default App;
