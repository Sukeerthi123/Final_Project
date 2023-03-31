import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";
import FrontPage from './FrontPage';

const Menu = () => {
  return (
    <main>
      <section className="totalpg"
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <div className="confirm-content">
        <h1 style={{color:"white"}}>Menu</h1>        
        </div>
        <Link to="/" className='button'>Home Page</Link>
        
        
      </section>
    </main>
  );
};

export default Menu;