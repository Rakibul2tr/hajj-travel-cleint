import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializefirebase from "../Firebase/Firebase.init";

  initializefirebase();
const Usefirebase=()=>{

    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user,setusers]=useState([]);
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [isLoding,setIsloding]=useState(true);
    const [packeges,setpackeges]=useState([])
    const [cart,setcart]=useState([]);
    const [gleary,setgleary]=useState([])
    const [singlepackeg,setsinglepackeg]=useState({});

    //google authentication sign in
    const googlesignin=()=>{
        setIsloding(true)
       signInWithPopup(auth, googleprovider)
       .then(result=>{
           const user=result.user;
           setusers(user)
       })
        .finally(()=>setIsloding(false));
    };

    //log out authintication 
    const LogOut=()=>{
        setIsloding(true);
        signOut(auth).then(() => {
            setusers({})
          }).catch((error) => {
            
          })
     .finally(()=>setIsloding(false));
    }
    // auth state changed ovserv hock
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setusers(user)
            } else {
                setIsloding(false);
            }
          });
    },[])

    //all packeg data fethc
    useEffect(()=>{
      fetch('http://localhost:5000/home')
      .then(res=>res.json())
      .then(data=>{
        setpackeges(data);
      })
    },[])

    
    //email & pasword validation login and register
    const emailhendle=(e)=>{
        setemail(e.target.value);
    }
    const passwordhendle=(e)=>{
        setpassword(e.target.value);
    }
     const submitHendel=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            setusers(user);
        })
     }
     //register email password
     const submitHendelregister=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            setusers(user);
        })
     }
     //add packege hendeler
     const addpackeg=(packeg)=>{
        const newcart=[...cart,packeg];
        setcart(newcart);
    }
    //gleary data get 
    useEffect(()=>{
        fetch("http://localhost:5000/gleary")
        .then(res=>res.json())
        .then(data=>{
            setgleary(data)
        })
    },[]);
    ///update
    const update=(id)=>{
            fetch(`http://localhost:5000/packeg/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setsinglepackeg(data)
            })
   
    }
    return {
        user,
        LogOut,
        googlesignin,
        emailhendle,
        passwordhendle,
        submitHendel,
        submitHendelregister,
        isLoding,
        packeges,
        addpackeg,
        cart,
        gleary,
        update,
        singlepackeg
        


        
    }
}
export default Usefirebase;