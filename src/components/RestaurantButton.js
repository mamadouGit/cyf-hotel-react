import React from "react";

const RestaurantButton = function(props) {
  return (
    <button onClick={props.orderone} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
