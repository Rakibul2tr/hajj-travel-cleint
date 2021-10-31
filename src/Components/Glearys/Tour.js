import React from 'react';
import UseContex from '../../Contextapi/UseContext';

const Tour = () => {
    const {gleary}=UseContex();
    const tourgleary=gleary.slice(10,15);
    return (
        <div className="container">
            <div className="row">
                {
                    tourgleary.map(item=><div key={item._id} className="col-sm-4 g-4">
                    <div className="card glearycard">
                        <div className="serviceimag">
                            <img className="w-100"height="200px" src={item.img} alt="" />
                        </div>
                       <div className="card-body">
                         <h4>{item.name}</h4>
                       </div>
                     </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tour;