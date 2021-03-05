import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Form, Formik } from "formik";

import ContactInformation from "./ContactInformation";
import OrgInformation from "./OrgInformation";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Contact Information", "About your organisation", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ContactInformation />;
    case 1:
      return <OrgInformation />;
    case 2:
      return `last step`;
    default:
      return "Unknown step";
  }
}

const VerticalStepper = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );
  const validationSchema = activeStep.validationSchema;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
        .then(() => {
          actions.resetForm()
          handleReset()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, touched, values }) => (
        <>
          <Form name="contact" data-netlify={true}>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography>{getStepContent(index)}</Typography>
                      <div className={classes.actionsContainer}>
                        <div>
                          <Button
                            disabled={activeStep === 0 || isSubmitting}
                            onClick={handleBack}
                            className={classes.button}
                          >
                            Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Finish"
                              : "Next"}
                          </Button>
                        </div>
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>
                    All steps completed - click submit to send
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onSubmit}
                    className={classes.button}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Paper>
              )}
            </div>
          </Form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(touched, null, 2)}</pre>
        </>
      )}
    </Formik>
  );
};

export default VerticalStepper;
