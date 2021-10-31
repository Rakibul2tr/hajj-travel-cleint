
import React from 'react';
import { createContext } from 'react';
import Usefirebase from '../Hoocks/Usefirebase';



  export  const Mycontext = createContext();
const Contexprovider = ({children}) => {
    const allContext= Usefirebase();
    return (
        <Mycontext.Provider value={allContext}>
            {children}
        </Mycontext.Provider>
    );
};

export default Contexprovider;