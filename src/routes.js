import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import NewPost from './containers/new_post';
import ShowPost from './containers/show_post';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import RequireAuth from './containers/require_auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={RequireAuth(NewPost)} />
    <Route path="posts/:id" component={ShowPost} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
