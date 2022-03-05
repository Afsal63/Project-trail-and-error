import React from 'react'
import '../index.css';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, } from 'react-bootstrap'
import {logout} from '../actions/userActions'

const Header = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
 const logoutHandler =()=>{
dispatch(logout())
 }
    return <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container >
                <Navbar.Brand className='header-logo' onClick={(e) => navigate('/')}>SportsCart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <i className='fas fa-shopping-cart'></i> Cart

                            </Nav.Link>
                        </LinkContainer>
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : <LinkContainer to='/login'>
                            <Nav.Link>
                                <i className='fas fa-usr'></i> Sign In
                            </Nav.Link>
                        </LinkContainer>}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>

}

export default Header