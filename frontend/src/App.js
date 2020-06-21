import React from 'react';
import './App.css';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';

function App() {
  const openSidebar = function(){
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSidebar = function(){
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openSidebar}>
                    &#9776;
                </button>
                <Link to="/">amazeone</Link>
            </div>
            <div className="header-links">
                <a href="signin.html">SignIn</a>
                <a href="cart.html">Cart</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeSidebar}>x</button>
            <ul>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
                <li>
                    <a href="index.html">Trousers</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
            </div>
        </main>
        <footer className="footer">
            All rights reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
