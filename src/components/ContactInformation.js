import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const ContactInformation = (props) => {
  return (
    <section>
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
    </section>
  );
};

ContactInformation.label = "Contact Information";
ContactInformation.initialValues = {
  firstName: "",
  lastName: "",
};
ContactInformation.validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
});

export default ContactInformation;
