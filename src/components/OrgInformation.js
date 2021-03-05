import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";

const OrgInformation = (props) => {
  return (
    <section>
      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="businessName"
        label="Business Name"
        component={TextField}
      />

      <Field
        fullWidth
        margin="normal"
        variant="outlined"
        color="secondary"
        name="streetAddress"
        label="Street Address"
        component={TextField}
      />
    </section>
  );
};

OrgInformation.label = "Org Information";
OrgInformation.validationSchema = Yup.object().shape({
  businessName: Yup.string().required("Please enter your business name"),
  streetAddress: Yup.string().required("Please enter your street address"),
});

export default OrgInformation;
