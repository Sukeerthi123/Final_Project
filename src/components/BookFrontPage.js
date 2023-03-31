import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";




const BookFrontPage = () => {
  const navigate = useNavigate();

  return (
    
  
    <BookingForm navigate={navigate} />
  );
};

export default BookFrontPage;