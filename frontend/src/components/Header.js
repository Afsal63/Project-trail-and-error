import React from 'react'
import '../index.css';
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container,  } from 'react-bootstrap'

const Header = () => {
    const navigate=useNavigate()
    return <header>
        <Navbar  bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container >
                <Navbar.Brand className='header-logo'  onClick={(e)=>navigate('/')}>SportsCart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>

                        <Nav.Link className='a' onClick={(e)=>navigate('/cart')}><i className='fas fa-shopping-cart '></i> Cart</Nav.Link>
                        <Nav.Link  className='a' onClick={(e)=>navigate('/login')}><i className='fas fa-user '></i>Sign In</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>

}

export default Header