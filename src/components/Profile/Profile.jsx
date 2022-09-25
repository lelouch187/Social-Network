import bg from "../../img/bg.jpg";
import ava
    from "../../img/ava.jpg";
import Posts
    from "./Posts/Posts";
import ProfileInfo
    from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className=" col-span-8">
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile