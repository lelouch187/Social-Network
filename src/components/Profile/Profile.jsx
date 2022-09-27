import bg from "../../img/bg.jpg";
import ava
    from "../../img/ava.jpg";
import Posts
    from "./Posts/Posts";
import ProfileInfo
    from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage}) => {
    return (
        <div className=" col-span-8">
            <ProfileInfo />
            <Posts postsData={profilePage.posts} />
        </div>
    )
}

export default Profile