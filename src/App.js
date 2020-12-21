import React from "react";

import {
  BrowserRouter as Router,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link,
  Switch,
  // eslint-disable-next-line no-unused-vars
  Redirect,
} from "react-router-dom";
import "./App.css";
// eslint-disable-next-line
import regeneratorRuntime from "regenerator-runtime";
import PostProvider from "./component/PostProvider.js";
// import Page404 from './component/Page404.js';
import Posts from "./component/Posts.js";
import NewPost from "./component/NewPost.js";
import ItemPost from "./component/ItemPost.js";
import ChangePost from "./component/ChangePost.js";

export default function App() {
  const urlEnv = `https://ra-react-router-hw2-backend.herokuapp.com/`;

  return (
    <PostProvider url={urlEnv}>
      <Router>
        {/* <Link to="/">a</Link> */}
        <div>
          {/* <Route path="/posts/new" component={NewPost} /> */}
          {/* <Redirect from="/" to="/posts/new" /> */}
          <Switch>
            {/* <Redirect from="/" to="/posts/new" /> */}
            <Route path="/posts/new" component={NewPost} />
            {/* <Route path="/" component={Posts} /> */}
            <Route path="/posts/change/:id" component={ChangePost} />
            <Route path="/posts/:id" component={ItemPost} />
            <Route path="/" component={Posts} />

            {/* <Route path="/recipes/new" component={NewRecipe} /> */}
            {/* <Route path="/recipes/:id" component={Recipe} /> */}
            {/* <Route path='*' component={Page404}/> */}
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
}
