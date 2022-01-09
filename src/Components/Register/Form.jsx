import React, { useState } from "react";
import "../../Css/form.css";

const Form = () => {
  const values = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    email: "",
    phone: "",
    areaps: "",
    capacityps: "",
    floors: "",
    slotspf: "",
    camera:"",
  };

  const [initialState, setState] = useState(values);
  const [data, setData] = useState({
    // fname:"",
    // lname:"",
    // email:"",
    // phone:"",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pincode,
    email,
    phone,
    areaps,
    capacityps,
    slotspf,
    floors,
    camera,
  } = initialState;

  const handleChange = (e) => {
    setState({ ...initialState, [e.target.name]: e.target.value });
    console.log(initialState);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // console.log(initialState);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/parcar/google_sheets/WkhZBpjGbzbzXoRW?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              name,
              address,
              city,
              state,
              country,
              pincode,
              email,
              phone,
              areaps,
              capacityps,
              floors,
              slotspf,
              camera,
            ],
          ]),
        }
      );
      await response.json();
      setState({
        ...initialState,
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        email: "",
        phone: "",
        areaps: "",
        capacityps: "",
        slotspf:"",
        floors: "",
        camera: "",
      });

      // alert(
      //   "Thank you for your order! We will reach out to you with further details soon!"
      // );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="form">Registration Form</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="required-field">
            <label htmlFor="name"></label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              required
            />
          </div>

   

          <div className="required-field">
            <label htmlFor="address"></label>
            <input
              placeholder="Address"
              type="text"
              name="address"
              autoComplete="off"
              value={address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="city"></label>
            <input
              placeholder="City"
              type="text"
              name="city"
              autoComplete="off"
              value={city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="state"></label>
            <input
              placeholder="State"
              type="text"
              name="state"
              autoComplete="off"
              value={state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="country"></label>
            <input
              placeholder="Country"
              type="text"
              name="country"
              autoComplete="off"
              value={country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="pincode"></label>
            <input
              placeholder="Pin Code"
              type="text"
              name="pincode"
              autoComplete="off"
              value={pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="email"></label>
            <input
              placeholder="Email Id"
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="phone"></label>
            <input
              placeholder="Phone No."
              type="text"
              name="phone"
              autoComplete="off"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="areaps"></label>
            <input
              placeholder="Area of parking space"
              type="text"
              name="areaps"
              autoComplete="off"
              value={areaps}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="capacityps"></label>
            <input
              placeholder="Capacity of parking space"
              type="text"
              name="capacityps"
              autoComplete="off"
              value={capacityps}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="required-field">
            <label htmlFor="floors"></label>
            <input
              placeholder="Number of floors"
              type="text"
              name="floors"
              autoComplete="off"
              value={floors}
              onChange={handleChange}
              required
            />
          </div>
          <div className="required-field">
            <label htmlFor="slotspf"></label>
            <input
              placeholder="Slots per floor"
              type="text"
              name="slotspf"
              autoComplete="off"
              value={slotspf}
              onChange={handleChange}
              required
            />
          </div>
          <div className="required-field">
            <label htmlFor="camera"></label>
            <input
              placeholder="Have an IP Camera"
              type="text"
              name="camera"
              autoComplete="off"
              value={camera}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* <div>
            <label htmlFor="camera"></label>
            <select
              style={{
                backgroundColor: "#fff",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "2px solid blue",
                borderLeft: "2px solid blue",
                borderTop: "none",
                borderRight: "none",
                display: "block",
                padding: "0.5rem 0.75rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.25",
                color: "#03045E",
              }}
              className="form-select"
              onChange={handleChange}
              name="camera"
              value={camera}
            >
              <option selected value="">
                Have an IP Camera
              </option>
              <option value="Y">Yes</option>
              <option value="N">No</option>
              
            </select>
          </div> */}

          

          

         

          {/* <!-- Button trigger modal --> */}
          <button
            className="btn btn-block text-light"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            type="submit"
            value="Register"
          >
            Register
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div
                class="modal-content"
                style={{ backgroundColor: "rgb(255 255 255 / 91%)" }}
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Order Processing....
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body" style={{ textAlign: "center" }}>
                  Thank you for your order! We will reach out to you with
                  further details very soon!
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <input className="btn" type="submit" value="Register" />
          </div> */}
        </div>
      </form>
    </>
  );
};

export default Form;