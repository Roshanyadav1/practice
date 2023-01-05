import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { Container, Grid, Typography } from '@mui/material'
import logo from '../assests/images/logo.svg'
import PopUp from '../component/popup/Popup';


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


const LoginForm = ({show , setShow}) => (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validate={(values) => {
            const errors = {};
            if (!values.email) {
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
        onSubmit={(values, { setSubmitting }) => {
            setShow(true)
            setTimeout(() => {
                setSubmitting(false);
                setShow(false)
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
    >
        {({ submitForm, isSubmitting, }) => (
            <Form>
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
                        log in
                    </Button>
                </Box>
            </Form>
        )}
    </Formik>
);



const Login = () => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <PopUp show={show} />
            <Container maxWidth="sm">
                <CardS >
                    <Grid item xs={12}  >
                        <CardC>
                            <img style={{ maxWidth: "80px", marginTop: "-45px" }} src={logo} alt="logo" />
                            <LoginForm show={show} setShow={setShow} />
                            <Typography variant='caption' >
                                Don't have an account ?
                                <Link to="sign-up">Sign Up</Link>
                            </Typography>
                        </CardC>
                    </Grid>

                </CardS>
            </Container>
        </>
    )
}

export default Login

