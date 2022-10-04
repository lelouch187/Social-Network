import React from "react";
import {
    addPostActionCreator, changePostActionCreator
} from "../../../redux/profile-page-reducer";
import Posts from "./Posts";

const PostsContainer = ({store}) => {

    let state = store.getState().profilePage

    let  addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let changePost = (text) => {
        let action = changePostActionCreator(text)
        store.dispatch(action)
    }


    return (
    <Posts changeTextPost={changePost} addPosts={addPost} textNewPost={state.textNewPost} posts={state.posts} />
    )
}
export default PostsContainer