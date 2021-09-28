import React, { useState } from "react";

import RestaurantButton from "./RestaurantButton";

const Order = function(props) {
  const [order, setorder] = useState(0);

  const orderone = function() {
    return setorder(order + 1);
  };

  return (
    <li>
      {props.orderType}: {order}{" "}
      <RestaurantButton orderone={orderone} order={order} />
    </li>
  );
};

export default Order;
