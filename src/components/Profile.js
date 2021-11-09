import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";
import AddTodo from './AddTodo';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    
    isAuthenticated && ( 
      <div>
     <AddTodo person={user.nickname}/>
      </div>
    ) 
  )
}

export default Profile
