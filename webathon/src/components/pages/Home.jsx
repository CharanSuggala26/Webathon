import React, { useEffect } from 'react'

import { useUser } from '@clerk/clerk-react';


const Home = () => {
    const {isSignedIn,user,isLoaded}=useUser();
    useEffect(()=>{
        console.log(isSignedIn)
        console.log(user)
        console.log(isLoaded)
    },[isSignedIn]);
    return (
    <div>Home</div>
  )
}

export default Home