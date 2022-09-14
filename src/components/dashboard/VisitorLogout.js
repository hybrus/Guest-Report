import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getEmployeeLists } from './EmployeeSlice';
import { outState } from './VisitorSlice';

export const VisitorLogout = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit,reset , formState: { errors } } = useForm();

    const [message, setMessage] = useState()

    useEffect(() => {
        const timer = setTimeout(() => setMessage(), 10000);
    }, [message]);

    useEffect(() => {
        dispatch(getEmployeeLists({}));
    }, []);

    const onSubmit = (formData) => {
        setMessage(false)
        dispatch(outState(formData.id))
        setMessage(true)
        reset()
    }

    return (
        <Container className='d-flex align-items-center align-center h-100 w-100' style={{ placeContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    {!!message &&
                        <Alert variant="success">
                            Visitor Logged Out!
                        </Alert>
                    }
                    <Card.Body>
                        <Card.Title>Visitor Logout</Card.Title>
                        <Form.Group className="mb-3" >
                            <Form.Label>Visitor ID</Form.Label> {!!errors?.id && <span className='text-danger'>* required</span>}
                            <Form.Control type="text" placeholder="visitor ID" name="id" ref={register({ required: true })} />
                        </Form.Group>

                        <Button variant="primary" type="submit">Logout</Button>
                    </Card.Body>

                </Form>
            </Card>
        </Container>
    );
};
