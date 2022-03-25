import React, {useContext, useState, useEffect} from 'react';

import {AuthContext} from '../../../context/auth';


export default function VerifyName() {
  const [icon, setIcon] = useState(null);
  const {account} = useContext(AuthContext);
  const [name,setName] = useState(null)

  useEffect(()=>{
    if (account.name) {
        setName(account.name);
      }
       else {
        setName(account.username);
      }
    
},[])
return(
    name
    )
}
