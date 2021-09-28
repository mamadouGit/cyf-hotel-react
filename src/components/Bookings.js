import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [booking, setbooking] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [customerProfileId, setCustomerProfileId] = useState();
  const onsearch = searchVal => {
    console.info("TO DO!", searchVal);
    console.log();
  };
  useEffect(
    function() {
      console.log("your first render");
      fetch("https://cyf-react.glitch.me")
        .then(res => res.json())
        .then(data => {
          const bookings = searchVal
            ? data.filter(
                value =>
                  value.firstName === searchVal || value.surname === searchVal
              )
            : data;
          setbooking(bookings);
        });
    },
    [searchVal]
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search search={setSearchVal} />
        {/* <SearchResults results={FakeBookings} />*/}
      </div>
      <SearchResults
        resultes={booking}
        onShowCustomerProfile={setCustomerProfileId}
      />
    </div>
  );
};

export default Bookings;
