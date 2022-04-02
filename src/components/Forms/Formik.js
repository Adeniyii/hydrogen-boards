import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

// interface FormikInterface {
//     validationSchema?: any,
//     values: any,
//     handleSubmit: any,
//     handleChange: any,
//     children: any
//  }
const FormsWrapper = (props) => {
  let {
    children,
    validationSchema: schema,
    values,
    handleSubmit,
    handleChange: onChange,
  } = props;
  return (
    <Formik
      initialValues={{ ...values }}
      onSubmit={handleSubmit}
      handleChange={onChange}
      validateOnChange={true}
      validationSchema={schema}
      enableReinitialize={false}
      // {...props}
    >
      {children}
    </Formik>
  );
};

FormsWrapper.propTypes = {
  validationSchema: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default FormsWrapper;

export const showFieldError = (name, errors, touched) => {
  return (
    <>
      {touched[name] && errors[name] && errors[name]?.trim() !== "" ? (
        <div className="mb-2">
          <small className="text-danger">{errors[name]}</small>
        </div>
      ) : null}
    </>
  );
};

export const showFieldArrayError = (name, errors, touched) => {
  return (
    <>
      {touched[name] && errors[name] && errors[name] !== "" ? (
        <div className="mb-2">
          <small className="text-danger">{errors[name]}</small>
        </div>
      ) : null}
    </>
  );
};
