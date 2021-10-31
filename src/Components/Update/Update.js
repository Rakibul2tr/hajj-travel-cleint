import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';


const Update = () => {
    
    const {id}=useParams();
    
    const [bookItems,setbookItems]=useState([])
    const{username,email,title,addres,description,status}=bookItems;
   
    //booking packeg manegment
    useEffect(()=>{
        fetch(`http://localhost:5000/manegeall/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setbookItems(data);
        })
    },[])
   
    // const { register, handleSubmit, formState: { errors } } = useForm();
    //  const onSubmit = data => {
    //      console.log(data);
    //     
    //  }
    const nameChing=e=>{
        const updatename=e.target.value;
        const updateUser={username:updatename,email:email,title:title,description:description,addres:addres}
        setbookItems(updateUser);
    }
    const emailChing=e=>{
        const updatemail=e.target.value;
        const updateUser={username:username,email:updatemail,title:title,description:description,addres:addres}
        setbookItems(updateUser);
    }
    const titleChing=e=>{
        const updatetitle=e.target.value;
        const updateUser={username:username,email:email,title:updatetitle,description:description,addres:addres}
        setbookItems(updateUser);
    }
    const addresChing=e=>{
        const updataddres=e.target.value;
        const updateUser={username:username,email:email,title:title,description:description,addres:updataddres}
        setbookItems(updateUser);
    }
    const desChing=e=>{
        const updatedes=e.target.value;
        const updateUser={username:username,email:email,title:title,description:updatedes,addres:addres}
        setbookItems(updateUser);
    }

    const handleSubmit=e=>{
        console.log(bookItems);
        e.preventDefault()
        fetch(`http://localhost:5000/manegeall/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(bookItems)
        })
        .then(res=>res.json())
        .then(data=>{
          
            if(data.modifiedCount>0){
                alert('your data is updated')
            }
        })
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="userinform w-50 mx-auto">
                  <form onSubmit={handleSubmit} className="w-100">
                      <input onChange={nameChing} type="text" name="name"value={username||''} id="" />
                      <input onChange={emailChing} type="email" name="email"value={email||''} id="" />
                      <input onChange={titleChing}type="text" name="title"value={title||''} id="" />
                      <input onChange={addresChing}type="text" name="addres"value={addres||''} id="" />
                      <input onChange={desChing}type="text" name="description"value={description||''} id="" />
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Option</option>
                        <option value={status||""}>panding</option>
                        <option value={status||""}>aprove</option>
                      </select>
                   
                   <input type="submit" value="Update Now"className="bg-warning" />
               </form>
             </div>
            </div>
        </div>
    );
};

export default Update;