import React from "react";
import "./BookingConfirmation.css";
import {Link} from "react-router-dom";
import FrontPage from './FrontPage';

const BookingConfirmation = () => {
  return (
    <main>
      <section className="totalpg"
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <div className="confirm-content">
        <h1 style={{color:"white"}}>Thank you for booking!</h1>
        <p>
          <b>Your Table Is Booked!!!</b>
        </p>        
        </div>
        <Link to="/" className='button'>Home Page</Link>
        
        
      </section>
    </main>
  );
};

export default BookingConfirmation;