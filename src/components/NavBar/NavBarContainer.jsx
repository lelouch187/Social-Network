
import {connect} from "react-redux";
import NavBar from "./NavBar";



const mapStateToProps = (state) => ({
    friends: state.sideBar.friends,
})

const NavBarContainer = connect(mapStateToProps)(NavBar)
export default NavBarContainer