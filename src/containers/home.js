import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

// this can be dumb or smart component - connect works with either
// example class based component (smart component)
class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { };
    this.renderPosts = this.renderPosts.bind(this);
    console.log({ props });
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return (
      <div>
        {this.props.posts.all.map(post => (
          <div key={post.id}>
            <Link to={`posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>);
  }
  render() {
    return (
      <div className="welcome">
        welcome!
        {this.renderPosts()}
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
export default connect(mapStateToProps, actions)(Home);
