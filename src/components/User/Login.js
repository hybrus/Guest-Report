import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './UserSlice';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const Login = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        userSelector
    );
    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {
            dispatch(clearState());
            history.push('/');
        }
    }, [isError, isSuccess]);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div>
                    <div>
                        <h2>
                            Sign in to your account
                        </h2>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                autoComplete="email"
                                ref={register({
                                    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                                })}
                                required
                                className="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                ref={register({ required: true })}
                                autoComplete="current-password"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Login;
