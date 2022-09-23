import './App.css';
import Header from "./components/Hader/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile
    from "./components/Profile/Profile";

const App =() => {
  return (
          <div className="pt-[20px] w-5/12 mx-auto grid grid-cols-10 gap-[20px] ">
              <Header />
              <NavBar />
              <Profile />
          </div>
  );
}

export default App;
