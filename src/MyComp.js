import React, { useEffect, useState } from 'react';
import { useFormikContext, Formik, Form, Field, ErrorMessage, useField } from 'formik';

const AutoSubmitToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm,  } = useFormikContext();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    if (values.token.length === 6) {
      submitForm();
    }
    console.log('the values is', values)
    // console.log('the errors is', errors)
  }, [values, submitForm]);
  return null;
};


const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    console.log('the usefiled is', useField(props))
    return (
      <>
        <label>
          {label}
          <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

function getStyles(errors, fieldName) {
    if (errors[fieldName]) {
      console.log('inside get')
      return {
        border: '1px solid #FC5555'
      }
    }
    console.log('outside get')
  }

const MyComp = () => {
    const [magicLink, setMagicLink] = useState("")
    const arr = [<h1>1</h1>, <h1>2</h1>, <h1>3</h1> , <div>hello</div>]
    useEffect(() => {
        // console.log('the first name is', magicLink)
    })
    return (
        <div>
          <h1>2-step Verification</h1>
          <p>Please enter the 6 digit code sent to your device</p>
          <Formik
            initialValues={{ token: '' }}
            enableReinitialize
            validate={values => {
              const errors = {};
              // if (values.token.length < 5) {
              //   errors.token = 'Invalid code. Too short.';
              // }
              setMagicLink(values.firstName)
              console.log('the first name is', magicLink)
              console.log('the values are', values)
              if (values.firstName.length < 5) {
                  errors.firstName = 'Invalid code. Too short.';
              }
              return errors;
            }}
            validateOnBlur={false}
            validateOnChange={true}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {
              ({errors, touched}) => (
                  <Form>
                  {/* <Field name="token" type="tel" style={{border:getStyles(errors, 'token')?.border}}/>
                  <ErrorMessage name="token" >
                  {msg => <div>{msg}</div>}</ErrorMessage> */}
                  {/* {errors.name && touched.name ? (
           -            <div>{errors.name}</div>) : null} */}
                  <MyTextField 
                      name="firstName" 
                      type="text" 
                      label="First Name" 
                      style={{border:getStyles(errors, 'firstName')?.border}}
                    //   onChange={(e) => setMagicLink(e.target.value)}
                  />
                  {/* <ErrorMessage name="firstName" >
                  {msg => <div>{msg}</div>}</ErrorMessage> */}
                  <Field name="rajiv" type="tel" />
                  <Field name="sanjiv" type="tel" />
                  <AutoSubmitToken />
                </Form>
              )
            }
          </Formik>
        </div>
      );
}


export default MyComp;;