import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseContex from '../../Contextapi/UseContext';

const AllPackeg = () => {
    const {packeges,addpackeg}=UseContex();
//  const homepackegdata= packeges.slice(0,6);
const addtocardhendl=(packeg)=>{
    addpackeg(packeg);
}
    return (
        <div className="container">
            <div className="row mt-4">
            <Navbar bg="warning" expand="lg" className="rounded">
                <Container >
                    <h2 className="text-center text-capitalize">See The All packege and order your choice Tour or Hajj pack.</h2>
                </Container>
             </Navbar>
            </div>
         <div className="row">
             {
                 packeges.map(packeg=><div key={packeg._id} className="col-sm-4 g-4">
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
                         <button onClick={()=>addtocardhendl(packeg)} className="btn btn-warning cardbtn">
                            <i className="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                  </div>
                 </div>)
             }
             <Link to="/home">
                 <button className="btn btn-warning">Back to Home</button>
             </Link>
         </div>
        </div>
    );
};

export default AllPackeg;