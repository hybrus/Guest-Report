import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { employeeListSelector, getEmployeeLists } from './EmployeeSlice';
import { addState } from './VisitorSlice';

export const VisitorForm = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector(employeeListSelector);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [visitorID, setVisitorID] = useState()

    const history = useHistory()

    useEffect(() => {
        dispatch(getEmployeeLists({}));
    }, []);

    const makeid = () => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result.toUpperCase();
    }

    const onSubmit = (formData) => {
        let data = formData;
        data.id = makeid()
        setVisitorID(data.id)
        data.visit_status = 'in'
        dispatch(addState(data))
        reset()
    }

    useEffect(() => {
        const timer = setTimeout(() => setVisitorID(), 20000);
    }, [visitorID]);

    return (
        <Container className='d-flex align-items-center align-center h-100 w-100' style={{ placeContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Card.Body>
                        <Card.Title>Visitor Sign in</Card.Title>

                        <div className={!!visitorID ? 'd-block' : 'd-none'}>
                            <h6 className='mt-3 mb-1'>Your Visitor ID:</h6>
                            <h1>{visitorID}</h1>
                            <p>*use this ID to logout</p>
                        </div>

                        <div className={!!visitorID ? 'd-none' : 'd-block'}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label> {!!errors?.name && <span className='text-danger'>* required</span>}
                                <Form.Control type="text" placeholder="Full Name" name="name" ref={register({ required: true })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Country</Form.Label> {!!errors?.country && <span className='text-danger'>* required</span>}
                                <Form.Control type="text" placeholder="Country" name="country" ref={register({ required: true })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Visiting Employee</Form.Label>  {!!errors?.employee && <span className='text-danger'>* required</span>}
                                <Form.Select aria-label="Select Employee to visit" name="employee" ref={register({ required: true })}>
                                    <option value="">Select Employee to visit</option>
                                    {employees?.map(obj => {
                                        return (
                                            <option key={obj.id} value={!!obj?.first_name ? obj.first_name : obj.email}>{!!obj?.first_name ? obj.first_name : obj.email}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>

                        </div>

                        {!!visitorID ?
                            <Button variant="warning" type="button" onClick={() => setVisitorID()}>Clear</Button>
                            :
                            <Button variant="primary" type="submit">Submit</Button>
                        }
                    </Card.Body>
                </Form>
            </Card>
        </Container>
    );
};
