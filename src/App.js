import React from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import PostList from './containers/PostList';
import PostShow from './containers/PostShow';
import UserList from './containers/UserList';
import UserShow from './containers/UserShow';
import CommentList from './containers/CommentList';
import CommentShow from './containers/CommentShow';
import Favourites from './containers/Favourites';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Switch>
      <Layout>
        <Header />
        <Layout>
          <Sider>
            <ul>
              <li>
                <Link to={"/posts"}>Posts</Link>
              </li>
              <li>
                <Link to={"/comments"}>Comments</Link>
              </li>
              <li>
                <Link to={"/users"}>Users</Link>
              </li>
              <li>
                <Link to={"/favourites"}>Favourites</Link>
              </li>
            </ul>
          </Sider>
          <Content>
            <Switch>
              <Route path={"/posts"} exact component={PostList} />
              <Route path={"/post/:id"} exact component={PostShow} />
              <Route path={"/users"} exact component={UserList} />
              <Route path={"/users/:id"} exact component={UserShow} />
              <Route path={"/comments"} exact component={CommentList} />
              <Route path={"/comments/:id"} exact component={CommentShow} />
              <Route path={"/favourites"} exact component={Favourites} />
              <Redirect to={"/posts"} />
            </Switch>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </Switch>
    </div>
  );
}

export default App;
