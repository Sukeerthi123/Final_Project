import React from "react";
import './App.css';

//import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import FrontPage from './components/FrontPage';
import Order from './components/Order';
import Menu from './components/Menu';
import Login from './components/Login';
import Footer from './components/Footer';
import BookFrontPage from './components/BookFrontPage';
import BookingConfirmation from "./components/BookingConfirmation";
import { useFormContext } from "./Context/FormContext";



function App() {




    return (
      
      <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Order" element={<Order />} />

          <Route path="/BookFrontPage" element={<BookFrontPage />} />
          <Route
            path="/BookingConfirmation"
            element={<BookingConfirmation />} />

        </Routes>

        <Footer />
   </BrowserRouter>

     </>
  );
 

}
export default App;


