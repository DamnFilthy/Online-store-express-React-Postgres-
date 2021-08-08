import React from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to={SHOP_ROUTE}>Iphone Mag</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link style={{ color: 'wheat' }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'wheat' }} href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        {user.isAuth ?
                            <Nav className="ml-auto">
                                <Button variant={'outline-light'}>Админ панель</Button>
                                <Button variant={'outline-light'}>Выйти</Button>
                            </Nav>
                            :
                            <Nav className="ml-auto">
                                <Button variant={'outline-light'}
                                    onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                            </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

);

export default NavBar;