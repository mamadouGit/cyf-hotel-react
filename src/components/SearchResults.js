import React, { useState } from "react";
import moment from "moment";

const daysbetween = function(a, b) {
  const first = moment(a);
  const second = moment(b);
  return second.diff(first, "days");
};
const The = function() {
  return (
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>firstname</th>
        <th> last name</th>
        <th> email</th>
        <th>room id</th>
        <th>checkin date</th>
        <th>checkout date</th>
        <th> nbre of nights</th>
        <th> profiles </th>
      </tr>
    </thead>
  );
};
const Tbo = function(props) {
  const [select, setselect] = useState(false);
  const Toggleselect = function() {
    return setselect(!select);
  };
  return (
    <tbody>
      <tr
        className={select ? "selected-row" : undefined}
        onClick={Toggleselect}
      >
        <td>{props.booking.id}</td>
        <td>{props.booking.title}</td>
        <td>{props.booking.firstName}</td>
        <td>{props.booking.surname}</td>
        <td>{props.booking.email}</td>
        <td>{props.booking.roomId}</td>

        <td>{props.booking.checkInDate}</td>
        <td>{props.booking.checkOutDate}</td>
        <td>
          {daysbetween(props.booking.checkInDate, props.booking.checkOutDate)}
        </td>
        <td>
          <button>Profile</button>
        </td>
      </tr>
    </tbody>
  );
};

const SearchResults = props => {
  return (
    <table>
      <thead>
        <The />
      </thead>
      <tbody>
        {props.resultes.map(function(booking, id) {
          return (
            <Tbo
              key={id}
              booking={booking}
              setShowProfile={val => props.onShowCustomerProfile(val)}
            />
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div className="tablestyle">
      <table>
        <The />
        <Tbo />
      </table>
    </div>
  );
};
export default SearchResults;
