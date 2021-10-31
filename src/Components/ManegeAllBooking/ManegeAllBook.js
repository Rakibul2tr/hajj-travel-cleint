import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManegeAllBook = () => {
    const [bookItems,setbookItems]=useState([])
    const [userdelete,setuserdelete]=useState([])

    //booking packeg manegment
    useEffect(()=>{
        fetch('https://shrieking-zombie-85124.herokuapp.com/manegeall')
        .then(res=>res.json())
        .then(data=>{
            setbookItems(data);
        })
    },[userdelete])
    //booking packege delete
    const deletebtn=(id)=>{
        const proceed=window.confirm("Are you sure deleted user ?");
        if(proceed){
            fetch(`https://shrieking-zombie-85124.herokuapp.com/manegeall/${id}`,{
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
    };
    const updatebtn=(id)=>{
        fetch(`https://shrieking-zombie-85124.herokuapp.com/manegeall/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookItems)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    
    return (
        <div className="container py-5 mb-5">
           <div className="row">
               <ol className='p-0 m-0 ms-auto'>
                  {
                      bookItems.map(singleitem=><li key={singleitem._id} className='p-0 m-0 w-75 mx-auto text-start'>
                        <span className="border me-2 p-1">{singleitem.title}</span>
                        <span className="border me-2 p-1">{singleitem?.email}</span>
                        <span className="border me-2 p-1">{singleitem?.username}</span>
                        <span className="border me-2 p-1">{singleitem?.status}</span>
                        <button onClick={()=>updatebtn(singleitem._id)} className="btn btn-danger m-2 p-1">
                            <Link to={`/manegeall/${singleitem._id}`} className="text-white">Update</Link>
                        </button>
                        <button onClick={()=>deletebtn(singleitem._id)} className="btn btn-danger m-2 p-1">X cancel</button>
                      </li>)
                  }
               </ol>
           </div>
        </div>
    );
};

export default ManegeAllBook;