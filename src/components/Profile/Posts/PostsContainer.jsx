import React from "react";
import {
    addPostActionCreator, changePostActionCreator
} from "../../../redux/profile-page-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    textNewPost: state.profilePage.textNewPost,
    posts: state.profilePage.posts,
})

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        let action = addPostActionCreator()
        dispatch(action)
    },
    changePost: (text) => {
        let action = changePostActionCreator(text)
        dispatch(action)
    }
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer