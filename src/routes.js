import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import NewPost from './containers/new_post';
import ShowPost from './containers/show_post';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={ShowPost} />
  </Route>
);
