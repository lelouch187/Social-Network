import Posts
    from "./Posts/Posts";
import ProfileInfo
    from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
    return (
        <div className="col-span-8">
            <ProfileInfo />
            <Posts postsData={profilePage.posts}
                   dispatch={dispatch}
                   textNewPost={profilePage.textNewPost}
            />
        </div>
    )
}

export default Profile