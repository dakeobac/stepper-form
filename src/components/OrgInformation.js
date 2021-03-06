import React from "react";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import * as Yup from "yup";
import { Box } from "@material-ui/core";

const OrgInformation = () => {
  return (
    <Box my={3}>
      <Field
        fullWidth
        component={CheckboxWithLabel}
        type="checkbox"
        name="cms"
        Label={{ label: "I need a blog" }}
      >
        <input type="hidden" name="cms" />
      </Field>
    </Box>
  );
};

OrgInformation.label = "Org Information";
OrgInformation.initialValues = {
  cms: false,
  shop: false
};
OrgInformation.validationSchema = Yup.object().shape({

});

export default OrgInformation;
