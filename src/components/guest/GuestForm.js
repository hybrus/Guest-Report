import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { employeeListSelector, getEmployeeLists } from './EmployeeSlice';
import { addState } from './GuestSlice';

export const GuestForm = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector(employeeListSelector);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [guestID, setGuestID] = useState()

    const history = useHistory()

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
        setGuestID(data.id)
        data.visit_status = 'in'
        data.time_in = dayjs().format('MM/DD/YYYY hh:mm A')
        data.time_out = ""
        dispatch(addState(data))
        reset()
    }

    useEffect(() => {
        const timer = setTimeout(() => setGuestID(), 20000);
        return () => clearTimeout(timer);
    }, [guestID]);

    return (
        <Container className='d-flex align-items-center align-center w-100 pt-5' style={{ placeContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Card.Body>
                        <Card.Title>Guest Sign in</Card.Title>

                        <div className={!!guestID ? 'd-block' : 'd-none'}>
                            <h6 className='mt-3 mb-1'>Your Guest ID:</h6>
                            <h1>{guestID}</h1>
                            <p>*use this ID to logout</p>
                        </div>

                        <div className={!!guestID ? 'd-none' : 'd-block'}>

                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label> {!!errors?.name && <span className='text-danger'>* required</span>}
                                <Form.Control type="text" placeholder="Full Name" {...register('name', { required: true })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Country</Form.Label> {!!errors?.country && <span className='text-danger'>* required</span>}
                                <Form.Control type="text" placeholder="Country" {...register("country", { required: true })} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Visiting Employee</Form.Label>  {!!errors?.employee && <span className='text-danger'>* required</span>}
                                <Form.Select aria-label="Select Employee to visit" {...register("employee", { required: true })}>
                                    <option value="">Select Employee to visit</option>
                                    {employees?.map(obj => {
                                        return (
                                            <option key={obj.id} value={!!obj?.first_name ? obj.first_name : obj.email}>{!!obj?.first_name ? obj.first_name : obj.email}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>

                        </div>

                        {!!guestID ?
                            <Button variant="warning" type="button" onClick={() => setGuestID()}>Clear</Button>
                            :
                            <Button variant="primary" type="submit">Submit</Button>
                        }
                    </Card.Body>
                </Form>
            </Card>
        </Container>
    );
};
