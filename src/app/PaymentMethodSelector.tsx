import React, { createContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box, FormHelperText, Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  paymentMethod: Yup.string().required('Please select a payment method....'),
});

interface PaymentMethodSelectorProps {
  onSelect: (paymentMethod: string) => void;
}

export default function PaymentMethodSelector({ onSelect }:  PaymentMethodSelectorProps) {
  return (
    <Formik
      initialValues={{ paymentMethod: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSelect(values.paymentMethod)}
    >
      {({ errors, touched }) => (
        <Form>
          <Box sx={{ mt: 3 }}>
            <FormControl component="fieldset" error={touched.paymentMethod && !!errors.paymentMethod}>
              <FormLabel component="legend">Select Payment Method</FormLabel>
              <Field as={RadioGroup} aria-label="payment method" name="paymentMethod">
                <FormControlLabel value="credit_card" control={<Radio />} label="Credit Card" />
                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="apple_pay" control={<Radio />} label="Apple Pay" />
              </Field>
              {touched.paymentMethod && errors.paymentMethod && (
                <FormHelperText>{errors.paymentMethod}</FormHelperText>
              )}
            </FormControl>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Continue
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
