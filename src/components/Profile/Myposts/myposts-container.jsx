import React, {Component} from "react";
import MyPosts from "./myposts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/actions/action";

class MyPostsContainer extends Component {

    render() {

        const {addPostActionCreator, updateNewPostTextActionCreator, posts, newPostText} = this.props;

        return <MyPosts updateNewPostText={updateNewPostTextActionCreator} addPost={addPostActionCreator} posts={posts}
                        newPostText={newPostText}/>
    }
}

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

const mapDispatchToProps = {
    addPostActionCreator, updateNewPostTextActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);