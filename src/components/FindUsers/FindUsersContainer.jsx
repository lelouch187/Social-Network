import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
    followAC, setUsersAC, unfollowAC
} from "../../redux/find-users-reducer";


const mapStateToProps = (state) => ({
    users: state.usersPage.users
})
const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)
export default FindUsersContainer