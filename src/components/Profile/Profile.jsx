import ProfileInfo
    from "./ProfileInfo/ProfileInfo";
import PostsContainer
    from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div className="col-span-8">
            <ProfileInfo />
            <PostsContainer />
        </div>
    )
}

export default Profile