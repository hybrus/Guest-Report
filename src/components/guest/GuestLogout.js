import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getEmployeeLists } from './EmployeeSlice';
import { outState } from './GuestSlice';

export const GuestLogout = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [message, setMessage] = useState()

    useEffect(() => {
        const timer = setTimeout(() => setMessage(), 10000);
        return () => clearTimeout(timer);
    }, [message]);

    const onSubmit = (formData) => {
        setMessage(false)
        dispatch(outState(formData.id))
        setMessage(true)
        reset()
    }

    return (
        <Container className='d-flex align-items-center align-center w-100 pt-5' style={{ placeContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    {!!message &&
                        <Alert variant="success">
                            Guest Logged Out!
                        </Alert>
                    }
                    <Card.Body>
                        <Card.Title>Guest Logout</Card.Title>
                        <Form.Group className="mb-3" >
                            <Form.Label>Guest ID</Form.Label> {!!errors?.id && <span className='text-danger'>* required</span>}
                            <Form.Control type="text" placeholder="guest ID" {...register("id", { required: true })} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Logout</Button>
                    </Card.Body>

                </Form>
            </Card>
        </Container>
    );
};
