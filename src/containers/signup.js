import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// this can be dumb or smart component - connect works with either
// example class based component (smart component)
class SignUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  onSignUp() {
    this.props.signupUser({ email: this.state.email, password: this.state.password });
  }
  render() {
    return (
      <div className="newPage">
        <input placeholder="email" onChange={this.onEmailChange} />
        <input placeholder="password" onChange={this.onPasswordChange} />
        <button id="submitButton" onClick={this.onSignUp}>Sign Up</button>
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
export default connect(mapStateToProps, actions)(SignUp);
