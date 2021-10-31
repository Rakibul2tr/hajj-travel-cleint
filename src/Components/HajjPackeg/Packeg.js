import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseContex from '../../Contextapi/UseContext';

const Packeg = () => {
 const {packeges}=UseContex();
 const homepackegdata= packeges.slice(0,6);
    return (
        <div className="container">
            <div className="row mt-4">
            <Navbar bg="warning" expand="lg" className="rounded">
                <Container >
                    <h2 className="text-center text-capitalize mx-auto">R R Trevels Hajj & Umrah packege</h2>
                </Container>
             </Navbar>
            </div>
         <div className="row">
             {
                 homepackegdata.map(packeg=><div key={packeg._id} className="col-sm-4 g-4">
                 <div className="card packegcard">
                     <div className="serviceimag">
                         <img className="w-100"height="200px" src={packeg.imgLink} alt="" />
                     </div>
                   <div className="card-body">
                     <h5 className="card-title">{packeg.title}</h5>
                     <p className="card-text">{packeg.description}</p>
                     <button className="btn btn-warning cardbtn me-2">
                     <Link to={`/packeg/${packeg._id}`}>Details and booking</Link>
                     </button>
                   </div>
                 </div>
                 </div>)
             }
             
             <button className="btn btn-warning cardbtn ms-auto w-25 mt-2">
              <Link to="/allpackeg">See All Packege</Link>
            </button>
         </div>
        </div>
    );
};

export default Packeg;


// 
// 
// 
// https://i.ibb.co/BjHR6BZ/turkey.jpg
// {/* <Navbar bg="warning" expand="lg" className="rounded">
//                 <Container>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mx-auto">
//                         <Nav.Link as={Link}to="/umrah" >UMRAH</Nav.Link>
//                         <Nav.Link as={Link}to="/hajj">HAJJ</Nav.Link>
//                         <Nav.Link as={Link}to="/tour">TUOR</Nav.Link>
//                     </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//                 </Navbar> */}