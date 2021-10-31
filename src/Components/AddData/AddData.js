import React from "react";
import { useForm } from "react-hook-form";

const AddData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/adddata`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
               alert('Your data is Added Successfull.')
           }
        })
    }

    return (
        <div className="container py-5 mt-5">
         <div className="row adddata mx-auto">
             <h3 className="">Add Packege data Hire</h3>
           <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                <input  {...register("title")} placeholder="Title"type="text" />
                <input  {...register("imgLink")} placeholder="Image Link"type="text" />
                <input {...register("description")} placeholder="description"type="text" />
                <input {...register("price")} placeholder="Price"type="text" />
                
                <input type="submit" />
            </form>
         </div>
        </div>
    );
};

export default AddData;