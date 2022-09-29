import Posts
    from "./Posts/Posts";
import ProfileInfo
    from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, changeTextPost}) => {
    return (
        <div className="col-span-8">
            <ProfileInfo />
            <Posts postsData={profilePage.posts}
                   addPost={addPost}
                   changeTextPost={changeTextPost}
                   textNewPost={profilePage.textNewPost}
            />
        </div>
    )
}

export default Profile