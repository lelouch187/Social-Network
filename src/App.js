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
    BrowserRouter,
    Routes,
    Router,
    Route
} from "react-router-dom";

const App =() => {
  return (
      <BrowserRouter>
          <div
              className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <Header/>
              <NavBar/>
              <Routes>
                  <Route
                      index
                      element={
                          <Profile/>}/>
                  <Route
                      path="/dialogs"
                      element={
                          <Dialogs/>}/>
                  <Route
                      path="/news"
                      element={
                          <News/>}/>
                  <Route
                      path="/music"
                      element={
                          <Music/>}/>
                  <Route
                      path="/settings"
                      element={
                          <Settings/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
