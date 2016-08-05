import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// this can be dumb or smart component - connect works with either
// example class based component (smart component)
class NewPost extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCreatePost = this.onCreatePost.bind(this);
  }
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onTagChange(event) {
    this.setState({ tag: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onCreatePost() {
    const post = {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    };
    this.props.createPost(post);
  }
  render() {
    return (
      <div className="newPage">
        <input placeholder="title" onChange={this.onTitleChange} />
        <input placeholder="tags" onChange={this.onTagChange} />
        <input placeholder="content" onChange={this.onContentChange} />
        <button id="submitButton" onClick={this.onCreatePost}>Submit</button>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(NewPost);
