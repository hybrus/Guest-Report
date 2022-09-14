import React from 'react'
import { Container, Table } from 'react-bootstrap'

import { useSelector } from 'react-redux';
import { guestListSelector } from '../guest/GuestSlice';

export const Guest = () => {

    const { guests } = useSelector(guestListSelector);

    return (
        <Container className='mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Employee</th>
                        <th>Date In</th>
                        <th>Date Out</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {guests?.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.country}</td>
                                <td>{obj.employee}</td>
                                <td>{obj.time_in}</td>
                                <td>{obj.time_out}</td>
                                <td>{obj.visit_status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {!!!guests || (!!guests && guests.length) <= 0 && <span className='text-muted'>* no guests to show</span>}
        </Container>
    )

}