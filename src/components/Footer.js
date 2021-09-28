import React from "react";
const Footer = props => {
  return (
    <div>
      <ul>
        {props.InfoArray.map(function(street, id) {
          return <li key={id}>{street}</li>;
        })}
      </ul>
      )
    </div>
  );
};
export default Footer;
