import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init'
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  

  // const [user, setUser] = useState({
  //   name: "Dilip",
  //   email: "dilip@mail.com",
  //   address: "planet earth",
  //   phone: "01793899288",
  // });
  // const handleAddressChange = (event) => {
  //     console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest }
  //   setUser(newUser);
  // };
  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      email:user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
     axios.post("https://polar-scrubland-97410.herokuapp.com/order", order).then((response) => {
       const { data } = response;
       if (data.insertedId) {
         toast('thanks for ur order')
         event.target.reset();
       }
     });
    }
 

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.displayName}
          name="name"
          id="name"
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          id="email"
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          id="service"
          placeholder="Service"
          required
          readOnly
          disabled
        />
        <br />
        <input
          
          className="w-100 mb-2"
          type="text"
          
          name="address"
          id="address"
          placeholder="Address"
          autoComplete='off'
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          
          name="phone"
          id="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input
          className="btn btn-primary mx-auto d-block"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
