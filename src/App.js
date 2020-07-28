import React from "react";
import './App.css';
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";
import PostList from './containers/PostList';
import PostShow from './containers/PostShow';
import UserList from './containers/UserList';
import UserShow from './containers/UserShow';
import CommentList from './containers/CommentList';
import CommentShow from './containers/CommentShow';
import Favourites from './containers/Favourites';
import SearchList from './containers/SearchList';
import { Layout, Button, Row, Col, Input } from 'antd';
const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;

function App() {

  const history = useHistory();

  const onSearchInputChange = (value) => {
    let path = `/search?query=${value}`;
    history.push(path);
  }

  return (
    <div className="App">
    <Switch>
      <Layout>
        <Header>  
          <Row>
            <Col span={6}></Col>
            <Col span={12}>
              <Search
                placeholder="Search..."
                onSearch={value => onSearchInputChange(value)}
                enterButton
              />
            </Col>
            <Col span={6}></Col>
          </Row>
        </Header>
        <Layout>
          <Sider>
            <Link to={"/posts"}>
              <Button type="primary">
                Posts
              </Button>
            </Link><br/>
            <Link to={"/comments"}>
              <Button type="primary">
                Comments
              </Button>
            </Link><br/>
            <Link to={"/users"}>
              <Button type="primary">
                Users
              </Button>
            </Link><br/>
            <Link to={"/favourites"}>
              <Button type="primary">
                Favourites
              </Button>
            </Link><br/>
          </Sider>
          <Content>
            <Switch>
              <Route path={"/search"} component={SearchList} />
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
