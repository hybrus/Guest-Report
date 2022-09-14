import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { userSelector, fetchUserBytoken, clearState, destroyUser } from '../components/User/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

export const Navigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { first_name, isError } = useSelector(userSelector);

    useEffect(() => {
        if (history.location.pathname !== '/login')
            dispatch(fetchUserBytoken({}));
    }, [history.location]);

    useEffect(() => {
        if (isError) {
            dispatch(clearState());
            history.push('/login');
        }
    }, [isError]);

    const onLogOut = () => {
        dispatch(destroyUser({}));
        history.push('/login');
    };

    return (
        <>
            {!!first_name &&
                <Navbar variant='dark' bg="dark">
                    <Container>
                        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>Visiting Report</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <NavLink  to="/"  exact={true} activeClassName="active" className="nav-link">Home</NavLink>
                                <NavLink  to="/visitors" activeClassName="active" className="nav-link">Visitors</NavLink>
                            </Nav>
                            <Nav className="ms-auto">
                                <Navbar.Text>
                                    Signed in as: <strong>{first_name}</strong>
                                </Navbar.Text>
                                <Nav.Link onClick={onLogOut} className="text-danger"> Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            }
        </>
    )
}