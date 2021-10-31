import React from 'react';
import logo from '../../media/logo/zamzam-logo-final.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseContex from '../../Contextapi/UseContext';
// import useFirebase from '../../../Hoocks/UseFirebase';



const Menubar = () => {
    // const {user,LogOut}=useFirebase();
    const {user,LogOut,cart}=UseContex();
    return (
     <div className="headerbg border border-bottom-2 border-warning">
        <div className="container">
            <Navbar collapseOnSelect expand="lg" bg="" variant="secondary" >
                <Container>
                <Navbar.Brand href="#home" className="logo d-flex justify-content-start">
                    <img className="img-fluid" width="50px" src="https://cdn.imgbin.com/10/17/9/imgbin-islam-logo-mosque-islam-Ei3MxLzzMVf90DdD9fW7VvNfM.jpg" alt="" />
                    <span className="fs-3 fw-6 text-danger lh-2 m-2 fs-1 fw-bolder">R.R.HAJJ TRAVEL</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-dark">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            {

                                user.email?<>
                            <NavDropdown title="Users" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link}to="/mybooking">My Select item {cart.length}</NavDropdown.Item>
                                <NavDropdown.Item as={Link}to="/users">User Name</NavDropdown.Item>
                                <NavDropdown.Item as={Link}to="/adddata">Add data</NavDropdown.Item>
                                <NavDropdown.Item as={Link}to="/manegeall">Manege All Book</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/login" onClick={LogOut}>Log Out</Link>
                                <span className="logedSpan">{user?.email}
                                <img width="30px" className="rounded-circle" src={user?.photoURL} alt="" />
                                <Link to="/mybooking"><i className="fas fa-shopping-cart">{cart.length}</i></Link>
                                </span>
                                
                            </>:<Link to="/login">Login</Link>

                            } 
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      </div>
    );
};

export default Menubar;