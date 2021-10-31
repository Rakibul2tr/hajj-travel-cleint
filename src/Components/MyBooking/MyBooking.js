import React from 'react';
import { Link } from 'react-router-dom';
import UseContex from '../../Contextapi/UseContext';

const MyBooking = () => {
    const {cart,user}=UseContex();
    console.log(user);
    
    return (
        <div className="container ">
            <h3 className="p-4">Your Sellected Packege {cart.length}</h3>
            <div className="row">
                {
                    cart.map(item=><div key={item._id} className="col-md-8 offset-md-4 mx-auto">
                        <div className="userlist row d-flex flex-row py-5">
                            <div className="imag col-md-6 mb-2">
                             <img width="300px" className="w-100"height="200px" src={item.imgLink} alt="" />
                            </div>
                            <div className="col-md-6 content">
                                <h4>{item.title}</h4>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-warning cardbtn me-2">
                                    <Link to={`/packeg/${item._id}`}>Details and booking</Link>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
               
            </div>
        </div>
    );
};

export default MyBooking;