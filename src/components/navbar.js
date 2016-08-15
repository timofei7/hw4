import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

// this can be dumb or smart component - connect works with either
// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.renderSignOut = this.renderSignOut.bind(this);
  }
  renderSignOut() {
    if (this.props.authenticated) {
      return (
        <div>
          <button onClick={this.props.signoutUser}>signout</button>
        </div>
      );
    }
    return (
      <div>
        <div><Link to="/signin">signin</Link></div>
        <div><Link to="/signup">signup</Link></div>
      </div>
    );
  }
  render() {
    return (
      <div className="navbar">
        <div id="logo"><Link to="/">zuffr</Link></div>
        <div id="postButton"><Link to="/posts/new">post!</Link></div>
        <div>{this.renderSignOut}</div>
      </div>
    );
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, actions)(NavBar);
