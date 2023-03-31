import React from "react";
import "./Order.css";
import {Link} from "react-router-dom";
import FrontPage from './FrontPage';

const Order= () => {
  return (
    <main>
      <section className="totalpg"
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <div className="confirm-content">
        <h1 style={{color:"white"}}>Order Now</h1>
              
        </div>
        <Link to="/" className='button'>Home Page</Link>
        
        
      </section>
    </main>
  );
};

export default Order;