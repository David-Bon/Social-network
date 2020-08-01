import React, {Component} from "react";
import MyPosts from "./myposts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../redux/actions/profile-actions";

class MyPostsContainer extends Component {

    render() {

        const {addPostActionCreator, posts} = this.props;
        return <MyPosts addPost={addPostActionCreator} posts={posts}
        />
    }
}

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
});

const mapDispatchToProps = {
    addPostActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);