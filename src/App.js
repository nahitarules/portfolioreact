import React from 'react';
//import logo from './logo.svg';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Header>
    <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            < Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
