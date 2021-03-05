import React from "react";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import * as Yup from "yup";

const OrgInformation = (props) => {
  return (
    <>
      <Field
        fullWidth
        component={CheckboxWithLabel}
        type="checkbox"
        name="cms"
        Label={{ label: "I need a cms" }}
      >
        <input type="checkbox" name="cms" />
      </Field>
    </>
  );
};

OrgInformation.label = "Org Information";
OrgInformation.validationSchema = Yup.object().shape({
  businessName: Yup.string().required("Please enter your business name"),
  streetAddress: Yup.string().required("Please enter your street address"),
});

export default OrgInformation;
