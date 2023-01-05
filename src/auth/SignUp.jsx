import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { Container, Grid, Typography } from '@mui/material'
import logo from '../assests/images/logo.svg'
import { PostData } from '../services/authServices';
import { Url } from '../helpers/config';
import Popup from '../component/popup/Popup';


const CardS = styled('Grid')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
}));

const CardC = styled('Card')(({ theme }) => ({
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    background: 'rgba( 31, 105, 225, 0.05 )',
    backdropFilter: ' blur( 3px )',
    webkitBackdropFilter: 'blur(3px)',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',

    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    flexDirection: 'column',

    '@media (max-width: 400px)': {
        width: '310px',
    },
}));


const LoginForm = ({ setShow, setMessage, navigation }) => (
    <Formik
        initialValues={{
            user_name: '',
            email: '',
            password: '',
        }}
        validate={(values) => {
            const errors = {};
            if (!values.user_name) {
                errors.user_name = "Enter user name"
            } else if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = 'Required';
            }
            else if (values.password.length < 8) {
                errors.password = 'Strong password';
            }
            return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
            setShow(true)
            try {
                const data = await PostData(Url.signUp, values)
                setSubmitting(false);
                setMessage(data.message)
                setTimeout(() => {
                    navigation('home')
                }, 2000);
            } catch (error) {
                setMessage(error.response.data.error)
            } finally {
                setTimeout(() => {
                    setShow(false)
                }, 2000);
            }
        }}
    >
        {({ submitForm, isSubmitting, }) => (
            <Form>
                <Box margin={1}>
                    <Field
                        component={TextField}
                        name="user_name"
                        type="text"
                        label="User name"
                        helperText="Enter your name"
                    />
                </Box>
                <Box margin={1}>
                    <Field
                        component={TextField}
                        name="email"
                        type="email"
                        label="Email"
                        helperText="Please Enter Email"
                    />
                </Box>
                <Box margin={1}>
                    <Field
                        component={TextField}
                        type="password"
                        label="Password"
                        name="password"
                        helperText="Please enter password"
                    />
                </Box>

                <Box margin={1} sx={{ justifyContent: 'center', display: 'flex' }} >
                    <Button
                        sx={{ margin: 1 }}
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Form>
        )}
    </Formik>
);



const SignUp = () => {
    const [show, setShow] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const navigation = useNavigate()
    return (
        <>
            <Popup show={show} message={message} />
            <Container maxWidth="sm">
                <CardS >
                    <Grid item xs={12}  >
                        <CardC>
                            <img style={{ maxWidth: "80px", marginTop: "-45px" }} src={logo} alt="logo" />
                            <LoginForm setShow={setShow} setMessage={setMessage} navigation={navigation} />

                            <Typography variant='caption' >
                                Already have a account ?
                                <Link to="/">Login</Link>
                            </Typography>
                        </CardC>
                    </Grid>

                </CardS>
            </Container>
        </>
    )
}

export default SignUp

