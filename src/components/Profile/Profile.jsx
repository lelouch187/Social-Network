import ProfileInfo
    from "./ProfileInfo/ProfileInfo";
import PostsContainer
    from "./Posts/PostsContainer";

const Profile = ({store}) => {
    return (
        <div className="col-span-8">
            <ProfileInfo />
            <PostsContainer store={store} />
        </div>
    )
}

export default Profile