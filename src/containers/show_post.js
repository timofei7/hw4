import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import marked from 'marked';

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
      titleEditing: false,
      tagEditing: false,
      contentEditing: false,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
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
  updatePost() {
    this.props.updatePost(this.props.params.id, {
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    });
  }
  deletePost() {
    this.props.deletePost(this.props.params.id);
  }
  renderTitle() {
    if (this.state.titleEditing) {
      return (
        <div>
          <input defaultValue={this.props.posts.post.title} onChange={this.onTitleChange} />
          <button onClick={() => {
            this.setState({ titleEditing: false });
            this.updatePost();
          }}>Save</button>
          <button onClick={() => this.setState({ titleEditing: false })}>
          Cancel</button>
        </div>
      );
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.title || '') }} />
        <button onClick={() => this.setState({ titleEditing: true })}>Edit</button>
      </div>
    );
  }
  renderTag() {
    if (this.state.tagEditing) {
      return (
        <div>
          <input defaultValue={this.props.posts.post.tags} onChange={this.onTagChange} />
          <button onClick={() => {
            this.setState({ tagEditing: false });
            this.updatePost();
          }}>Save</button>
          <button onClick={() => this.setState({ tagEditing: false })}>
          Cancel</button>
        </div>
      );
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.tags || '') }} />
        <button onClick={() => this.setState({ tagEditing: true })}>Edit</button>
      </div>
    );
  }
  renderContent() {
    if (this.state.contentEditing) {
      return (
        <div>
          <input defaultValue={this.props.posts.post.content} onChange={this.onContentChange} />
          <button onClick={() => {
            this.setState({ contentEditing: false });
            this.updatePost();
          }}>Save</button>
          <button onClick={() => this.setState({ contentEditing: false })}>
          Cancel</button>
        </div>
      );
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.posts.post.content || '') }} />
        <button onClick={() => this.setState({ contentEditing: true })}>Edit</button>
      </div>
    );
  }
  render() {
    return (
      <div className="showPage">
        <div>{this.renderTitle()}</div>
        <div>{this.renderTag()}</div>
        <div>{this.renderContent()}</div>
        <button onClick={this.deletePost}>Delete</button>
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
