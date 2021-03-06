import React from "react";
import * as Yup from "yup";
import { Field } from "formik";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

const ProjectDetails = () => {
  return (
    <Box my={3} fullWidth>
      <FormGroup row>
        <FormControlLabel
          control={
            <Field name="features" type="checkbox" value="cms" as={Checkbox} />
          }
          label="I need a cms"
        />
        <FormControlLabel
          control={
            <Field name="features" type="checkbox" value="shop" as={Checkbox} />
          }
          label="I need a shop"
        />
      </FormGroup>
    </Box>
  );
};

ProjectDetails.label = "Org Information";
ProjectDetails.initialValues = {
  features: [],
};
ProjectDetails.validationSchema = Yup.object().shape({});

export default ProjectDetails;
