'use client';

import React from 'react';
import { Formik, Form, Field, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
});

interface RegisterFormProps {
  onSubmit: (values: any) => void;
}

type OnSubmitFunction = (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<void>;

const onSubmit = (values: OnSubmitFunction) => {
  console.log(values);
} 

export default function RegisterForm( { onSubmit }: RegisterFormProps ) {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h4" gutterBottom>
              Register
            </Typography>
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
