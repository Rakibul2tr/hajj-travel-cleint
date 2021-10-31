import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
    const [users,setusers]=useState([])
    const [userdelete,setuserdelete]=useState([])
//get users
    useEffect(()=>{
        fetch("https://shrieking-zombie-85124.herokuapp.com/user")
        .then(res=>res.json())
        .then(data=>{
            setusers(data);
        })
    },[userdelete])
    //delete user
    const deletebtn=(id)=>{
        const proceed=window.confirm("Are you sure deleted user ?");
        if(proceed){
            fetch(`https://shrieking-zombie-85124.herokuapp.com/user/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json"
            },
        })
        .then(res=>res.json())
        .then(data=>{
            setuserdelete(data);
            if(data.deletedCount >0){
                alert('your user is deleted')
            }
        })
        }
    }
    return (
        <div className="container py-5">
            <div className="row pt-5">
                {
                    users.map(user=><div key={user._id} className="col-md-8 offset-md-4 mx-auto">
                        <div className="userlist d-flex justify-content-evenly mb-2">
                            <h6>{user.username}</h6>
                            <h6>{user.email}</h6>
                            <button onClick={()=>deletebtn(user._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;