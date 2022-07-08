import React from "react";
import { Outlet, Link } from "react-router-dom";

import Footer from "./Footer";

const Layout = () => (
  <div>
    <header>
      <h1>Mood Tracker App</h1>
      <nav className="topnav">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
