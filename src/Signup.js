import React from "react";
import Red from './Red'
import {Redirect, Link} from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'


import './signup.css'

const initialValues = {
    firstName: '',
    lastName: '',
    uname: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    uname: Yup.string().required('Required').matches(/\d+/, 'should contain at least 1 number'),
    email: Yup.string().email('invalid email').required('Required'),
    password: Yup.string().length(5, 'must be 5 characters').required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'passwords must match').required('Required'),
})

const Signup = () => {

    return (
        <div className='signup'>
            <h2 className='signup-header'> SPC </h2>
            <p className='signup-p'>Signup to continue shopping</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit= {  (values, { setSubmitting}) => {
                    console.log('data', values)
                  
                  setSubmitting(false);
                } }
            >

                {(formik) => (
                   
                    <Form className='signup'>
                       
                        <Field name='firstName' type='text' placeHolder='FirstName' className='signup-input' />
                        <ErrorMessage name='firstName' component={Red} />

                        <Field name='lastName' type='text' placeHolder='Last Name' className='signup-input' />
                        <ErrorMessage name='lastName' component={Red} />

                        <Field name='uname' type='text' placeHolder='User Name' className='signup-input' />
                        <ErrorMessage name='uname' component={Red} />

                        <Field name='email' type='email' placeHolder='Email' className='signup-input' />
                        <ErrorMessage name='email' component={Red} />

                        <Field name='password' type='password' placeHolder='Password' className='signup-input' />
                        <ErrorMessage name='password' component={Red} />

                        <Field name='confirmPassword' type='password' placeHolder='Confirm Password' className='signup-input' />
                        <ErrorMessage name='confirmPassword' component={Red} />

                       { formik.isValidating ? <><button className='btn btn-block signup-btn' type='submit' disabled={!(formik.isValid && formik.dirty)}><Redirect to='/login' />Signup</button></>: 
                       <button className='btn btn-block signup-btn' type='submit' disabled={!(formik.isValid && formik.dirty)}>Signup</button>} 
                    
                       <p style={{textAlign: 'right'}}>Already have an account? <Link to='/login' style={{color: 'red'}}>login</Link></p>
                    </Form>
                )}

            </Formik>

        </div>
    )
}

export default Signup