// App.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contacts: '',
    },
    // For validation
    validationSchema: Yup.object({
      firstName: Yup.string().required('Enter your first name!'),
      lastName: Yup.string().required('Enter your last name'),
      email: Yup.string().email('Enter valid mail').required('Enter your email address'),
      contacts: Yup.string().required('Enter your contact'),
    }),
    // For submit
    onSubmit: (values) => {
      alert('Registration successful!');
      console.log(values);
    },
  });

  return (
    <div className='all'>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">FirstName:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div>
        <label htmlFor="contacts">Contacts:</label>
        <input
          type="text"
          id="contacts"
          name="contacts"
          onChange={formik.handleChange}
          value={formik.values.contacts}
        />
        {formik.touched.contacts && formik.errors.contacts ? (
          <div>{formik.errors.contacts}</div>
        ) : null}
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
    
  );
}

export default App;

