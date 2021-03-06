import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const ContactInformation = () => {
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
      />

      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="lastName"
        label="Last Name"
        component={TextField}
      />

      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="email"
        label="Your email address"
        component={TextField}
      />
      <Field
        margin="normal"
        fullWidth
        multiline
        color="secondary"
        rows={4}
        component={TextField}
        label="Your message"
        name="message"
        variant="outlined"
      />

    </>
  );
};

ContactInformation.label = "Contact Information";
ContactInformation.initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
ContactInformation.validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().required("Please enter your email address"),
});

export default ContactInformation;
