import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseContex from '../../Contextapi/UseContext';

const PackegDetail = () => {
    const {singlid}=useParams();
    const {update,user,singlepackeg}=UseContex();
    // const {displayName,email}=user;
     update(singlid);
    const {title,imgLink,description}=singlepackeg;
    const [users,setusers]=useState({})
   
   
    const { register, handleSubmit, formState: { errors }, } = useForm({
        reValidateMode: 'onBlur',
        all : 'onSubmit'
    })
    
    const onSubmit = data => {
        data.status='pending';
        data.userId=user.uid;
        fetch(`http://localhost:5000/packeg/${singlid}`,{

            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Your information is collected')
            }
        })
        
    }
    
    
    return (
        <div className="container py-5 mt-5">
            <h3 className="pb-5">Wellcome Our Details Packege</h3>
            <div className="row ">
                <div className="col-md-7">
                    <img className="img-fluid" height="400px" src={imgLink} alt="" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                
                <div className="col-md-5">
                  <div className="userinform">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                        <input  defaultValue={user.displayName}{...register("username")}name="name" placeholder="Title"type="text" />
                        <input  defaultValue={user.email}{...register("email")}name="email" placeholder="email"type="email" />
                        <input  defaultValue={title}{...register("title")}name="title" placeholder="title"type="text" />
                        <input  {...register("addres")} placeholder="Full Addres"type="textarea" />
                        <input {...register("description")} placeholder="description"type="text" />
                        <input type="submit" value="Book Now"className="bg-warning" />
                    </form>
                  </div>
                </div>
            </div>
            <button className="btn btn-warning cardbtn ms-auto w-25 mt-2">
              <Link to="/allpackeg">See All Packege</Link>
            </button>
        </div>
    );
};

export default PackegDetail;