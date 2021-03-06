import React from "react";
import * as Yup from "yup";
import { Field } from "formik";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";

const OrgInformation = () => {
  return (
    <Box my={3} fullWidth>
      <FormGroup row>
        <FormControlLabel
          control={<Field name="cms" type="checkbox" as={Checkbox} />}
          label="I need a cms"
        />
        <FormControlLabel
          control={<Field name="shop" type="checkbox" as={Checkbox} />}
          label="I need a shop"
        />
      </FormGroup>
    </Box>
  );
};

OrgInformation.label = "Org Information";
OrgInformation.initialValues = {
  cms: false,
  shop: false,
};
OrgInformation.validationSchema = Yup.object().shape({});

export default OrgInformation;
