import React, { Component } from "react";
import { connect } from "react-redux";

class Reddit extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { posts, isLoading, error } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error..{error.message}.</div>;
    }
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <span>{post.score}</span>
            <div>
              <h2>{post.title}</h2>
              <div>{post.num_comments} comments</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

Reddit.defaultProps = { posts: [] };
const mapStateToProps = state => ({
  posts: state.posts,
  isLoading: state.isLoading,
  errror: state.errror
});

export default connect(mapStateToProps)(Reddit);
