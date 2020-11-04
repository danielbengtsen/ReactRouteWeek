import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(
        `First Name: ${reservation.firstName} \n` + 
        `Last Name: ${reservation.lastName} \n` +
        `Email: ${reservation.email} \n` +
        `Phone: ${reservation.phone} \n` +
        `Street: ${reservation.street} \n` +
        `City: ${reservation.city} \n` +
        `Zip: ${reservation.zip} \n` +
        `Country: ${reservation.country}`
    );
  }
 
  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          type="text"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          type="text"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <input
          name="email"
          type="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />
        <input
          name="phone"
          type="number"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <br />
        <input
          name="street"
          type="text"
          value={reservation.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <br />
        <input
          name="city"
          type="text"
          value={reservation.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        <input
          name="zip"
          type="number"
          value={reservation.zip}
          onChange={handleChange}
          placeholder="Zip"
        />
        <br />
        <input
          name="country"
          type="text"
          value={reservation.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <br />
        <input onClick={handleSubmit} type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;