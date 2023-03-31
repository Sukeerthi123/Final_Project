import React from "react";
import useForm from "../hooks/useForm";
import "./BookingForm.css";
import background from '../image/salad.png';
import { Link } from "react-router-dom";


  
    
  
    const BookingForm = ({ navigate }) => {
      const {
        form,
        timeSlots,
        isFormValid,
        changeNameHandler,
        changeEmailHandler,
        changePhoneHandler,
        changeDateHandler,
        changeTimeHandler,
        changeGuestsHandler,
        changeOccasionHandler,
        submitHandler,
      } = useForm();

      function handleSubmit() {
        console.log("Submitted")
        const response = submitHandler();
        return response ? navigate("/booking-confirmation") : null;
        
      }
  
    return (
      <form onSubmit={handleSubmit} className="table-form" style={{backgroundImage:`url(${background})`,
      backgroundReapeat:"no-repeat",
      backgroundSize:"cover",
     
    }}>
      
        <div className="column">
          <h2 className="tit" title="Header">Booking Form</h2>
          <label htmlFor="name">
            <p>Your Name</p>
            <input
              value={form.name}
              onChange={changeNameHandler}
              type="text"
              id="name"
            />
          </label>
          <label htmlFor="email">
            <p>Your Email</p>
            <input
              value={form.email}
              onChange={changeEmailHandler}
              type="email"
              id="email"
            />
          </label>
          <label htmlFor="phone">
            <p>Your Phone Number</p>
            <input
              value={form.phone}
              onChange={changePhoneHandler}
              type="number"
              id="phone"
            />
          </label>
          <label htmlFor="res-date">
            <p>Choose date</p>
            <input
              value={form.date}
              onChange={changeDateHandler}
              type="date"
              id="res-date"
              placeholder="Date"
            />
          </label>
          <label htmlFor="res-time">
            <p>Choose time</p>
            <select onChange={changeTimeHandler} value={form.time} id="res-time">
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>
        






          <label htmlFor="guests">
            <p>Number of guests</p>
            <input
              value={form.numberOfGuests}
              onChange={changeGuestsHandler}
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              required
            />
          </label>
          <label htmlFor="occasion">
          <p>Occasion</p>
          <select
            value={form.occasion}
            onChange={changeOccasionHandler}
            id="occasion"
          >
            <option value="">None</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </label>
        <div className="submit-container">
          <button disabled={!isFormValid}><Link to="/BookingConfirmation" className="bookButton">Make Reservation</Link></button>
        </div>


        

        </div>
      
        
      </form>
    );
  };
  
  export default BookingForm;