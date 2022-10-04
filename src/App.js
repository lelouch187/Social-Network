import './App.css';
import Header from "./components/Hader/Header";
import NavBar from "./components/NavBar/NavBar";
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

const App =({store}) => {
  return (
          <div
              className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <Header/>
              <NavBar store={store}/>
              <Routes>
                  <Route path="/profile" element={<Profile store={store}/>}/>
                  <Route path="dialogs/*" element={<DialogsContainer store={store} />}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>
              </Routes>
          </div>
  );
}
export default App;
