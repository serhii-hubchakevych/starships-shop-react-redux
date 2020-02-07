import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";

import "./cart-form.css";
import { OrderService } from "../../services/orders-service";

const orderService = new OrderService();

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <React.Fragment>
    <TextField
      id="outlined-basic"
      {...input}
      error={touched && error && true}
      helperText={touched && error}
      label={label}
      type={type}
      className="form-control"
      variant="outlined"
    />
  </React.Fragment>
);

const Form = props => {
  const { handleSubmit, orderCreated } = props;

  return (
    <form
      onSubmit={handleSubmit(
        items =>
          orderService.sendOrderToDB(items).then(
            res => res !== true ? alert("Rejected: " + res) : orderCreated() 
          )
      )}
    >
      <div className="form-group">
        <Field
          name="firstname"
          type="text"
          component={renderField}
          label="Name:"
        />
      </div>
      <div className="form-group">
        <Field
          name="lastname"
          type="text"
          component={renderField}
          label="Surname:"
        />
      </div>
      <div className="form-group">
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address:"
        />
      </div>
      <div className="form-group">
        <Field name="phone" type="tel" component={renderField} label="Phone:" />
      </div>
      <button type="submit" className="btn btn-outline-danger width-btn">
        ORDER
      </button>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Name field is required!";
  } else if (values.firstname.length < 2) {
    errors.firstname = "Name length must be higher then 1!";
  } else if (values.firstname.length > 15) {
    errors.firstname = "Name length must be less then 15!";
  } else if (/[^A-Za-z]+/.test(values.firstname)) {
    errors.firstname = "Name must be a string value!";
  }
  if (!values.lastname) {
    errors.lastname = "Surname field is required!";
  } else if (values.lastname.length < 2) {
    errors.lastname = "Surname length must be higher then 1!";
  } else if (values.lastname.length > 15) {
    errors.lastname = "Surname length must be less then 15!";
  } else if (/[^A-Za-z]+/.test(values.lastname)) {
    errors.lastname = "Surname must be a string value!";
  }
  if (!values.address) {
    errors.address = "Address field is required!";
  } else if (values.address.length > 20) {
    errors.address = "Incorrect address!";
  }
  if (!values.phone) {
    errors.phone = "Phone field is required";
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(values.phone)
  ) {
    errors.phone = "Phone must be a number!";
  } else if (values.phone.length > 10) {
    errors.phone = "Your phone is very big!";
  }
  return errors;
};

export default reduxForm({
  form: "orderForm",
  validate
})(Form);
