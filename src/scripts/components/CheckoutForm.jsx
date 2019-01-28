import CustomInput from './CustomInput.jsx';
import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="container-gap">
      <div className="col-12 col-md-6">
        <CustomInput
          className="form-control"
          isRequired
          placeholder="First Name"
          type="text" />
      </div>
      <div className="col-12 col-md-6">
        <CustomInput
          className="form-control"
          isRequired
          placeholder="Last Name"
          type="text" />
      </div>
      <div className="col-12">
        <CustomInput
          className="form-control"
          isRequired
          placeholder="Email"
          type="email" />
      </div>
    </div>
  );
};

export default CheckoutForm;
