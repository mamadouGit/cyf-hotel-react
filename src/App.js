import React from "react";

import Bookings from "./components/Bookings";
import "./App.css";
import Rheader from "./components/Heading";
import Touristinfocards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Touristinfocards />
      <Bookings />
      <Restaurant />
      <Footer
        InfoArray={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
