import React, { useState } from "react";
import Searchbutton from "./SearchButton";
import headings from "./headings";
const Search = props => {
  const [input, setinput] = useState("");
  const submithandler = function(e) {
    e.preventDefault();
    props.search(input);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submithandler}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={input}
                onChange={function(e) {
                  return setinput(e.target.value);
                }}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <Searchbutton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
