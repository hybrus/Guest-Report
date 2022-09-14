import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'

import { useSelector } from 'react-redux';
import { visitorListSelector } from '../dashboard/VisitorSlice';

export const Visitor = () => {

    const { visitors } = useSelector(visitorListSelector);
    console.log(visitors);

    return (
        <Container className='mt-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Visiting Employee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {visitors?.map(obj => {
                        return (
                            <tr key={obj.id}>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>{obj.country}</td>
                                <td>{obj.employee}</td>
                                <td>{obj.visit_status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            {!!!visitors || (!!visitors && visitors.length) <=0 && <span className='text-muted'>* no visitors to show</span>}
        </Container>
    )

}