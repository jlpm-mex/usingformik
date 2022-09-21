import React from "react";
import { useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
        alert("Login Successful");
    },
    validate: values => {
      let mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;
      let errors = {};
        if(!values.email) errors.email = 'Field required';
        if(errors.email === undefined && !mailRegex.test(values.email) ) errors.email = 'Username should be an email';
        if(!values.password) errors.password = 'Field required';
      return errors; 
    }
  });
  
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        textAlign: "center",
        background: 'rgba(60, 41, 41, 0.10)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(9.2px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding:'3rem',
        transform:'translate(-50%,-50%)'
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>Email</div>
          <input
            id="emailField"
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red", fontSize: 12 }} id="emailError">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <div>Password</div>
          <input
            id="pswField"
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div style={{ color: "red", fontSize: 12 }} id="pswError">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div style={{ margin: "1rem" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
