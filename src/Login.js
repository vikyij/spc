import React from "react";
import Red from './Red'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'


import './signup.css'

const initialValues = {
    uname: '',
    password: '',
}


const validationSchema = Yup.object({
    uname: Yup.string().required('Required').matches(/\d+/, 'should contain at least 1 number'),
    password: Yup.string().length(5, 'must be 5 characters').required('Required'),
})

const Login = () => {

    return (
        <div className='signup'>
           <h2 className='signup-header'> SPC </h2>
            <p className='signup-p'>Login to continue shopping</p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('data', values)

                    setSubmitting(false);
                }}
            >

                {(formik) => (

                    <Form className='signup'>

                        <Field name='uname' type='text' placeHolder='User Name' className='signup-input' />
                        <ErrorMessage name='uname' component={Red} />

                        <Field name='password' type='password' placeHolder='Password' className='signup-input' />
                        <ErrorMessage name='password' component={Red} />


                        {formik.isValidating ? 
                        
                            <button className='btn signup-btn btn-block' type='submit' disabled={!(formik.isValid && formik.dirty)}>
                                Login 
                            </button> :

                            <Link to={{
                                pathname: '/cart',
                                state: {
                                    uname: formik.values.uname
                                }
                            }}>
                                <button className='btn btn-block signup-btn' type='submit' disabled={!(formik.isValid && formik.dirty)}>Login</button>
                            </Link>
                        }

                        <p style={{ textAlign: 'right' }}>Don't have an account? <Link to='/signup' style={{ color: 'red' }}>signup</Link></p>

                    </Form>
                )}

            </Formik>

        </div>
    )
}

export default Login