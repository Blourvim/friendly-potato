import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const signOut=()=>{
    axios({
        method:'delete',
        url:"www.google.com",
        data:{}
    })
    .then(res=>console.log(res))
    .catch(err=>console.error(err))

    //yay you signed out!
}

const SignOut = () => {
    return (
    <Button onClick={()=>signOut()}variant="contained" color="secondary">
        Sign Out
    </Button>
    )
}

export default SignOut;