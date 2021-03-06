import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

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
      <Box my={3} fullWidth>
        <FormGroup row>
          <FormControlLabel
            control={
              <Field
                name="features"
                type="checkbox"
                value="cms"
                as={Checkbox}
              />
            }
            label="I need a cms"
          />
          <FormControlLabel
            control={
              <Field
                name="features"
                type="checkbox"
                value="shop"
                as={Checkbox}
              />
            }
            label="I need a shop"
          />
        </FormGroup>
      </Box>
    </>
  );
};

ContactInformation.label = "Contact Information";
ContactInformation.initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  features: [],
};
ContactInformation.validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string().required("Please enter your email address"),
});

export default ContactInformation;
