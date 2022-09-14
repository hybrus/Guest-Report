import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { userSelector, fetchUserBytoken, clearState, destroyUser } from '../components/user/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getEmployeeLists } from '../components/guest/EmployeeSlice';

export const Navigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { first_name, isError } = useSelector(userSelector);

    useEffect(() => {
        if (history.location.pathname !== '/login' && !!!first_name){
            dispatch(fetchUserBytoken({}));
            dispatch(getEmployeeLists({}));
        }
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
                        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>Guest Report</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me-auto">
                                <NavLink to="/" exact={true} activeClassName="active" className="nav-link">Home</NavLink>
                                <NavDropdown title="Guest" id="basic-nav-dropdown">
                                    <NavLink to="/guest-in" activeClassName="active" className="dropdown-item">Check In</NavLink>
                                    <NavLink to="/guest-out" activeClassName="active" className="dropdown-item">Check Out</NavLink>
                                </NavDropdown>
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