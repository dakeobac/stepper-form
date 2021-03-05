import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const ContactInformation = (props) => {
  return (
    <>
      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="firstName"
        label="First Name"
        component={TextField}
      >
        <input type="text" name="firstName" />
      </Field>
      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="lastName"
        label="Last Name"
        component={TextField}
      >
        <input type="text" name="lastName" />
      </Field>

      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="email"
        label="Your email address"
        component={TextField}
      >
        <input type="email" name="email" />
      </Field>
      <Field
        margin="normal"
        fullWidth
        multiline
        color="secondary"
        rows={4}
        component={TextField}
        label="Your message"
        name="outlined"
        variant="outlined"
      >
        <input type="text" name="message" />
      </Field>
    </>
  );
};

ContactInformation.label = "Contact Information";
ContactInformation.initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};
ContactInformation.validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().required("Please enter your email address")
});

export default ContactInformation;
