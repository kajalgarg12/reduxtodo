import React from 'react'
import '../App.css'
import { useAuth0 } from '@auth0/auth0-react';
function HomePage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <>
          <h1>kajal;</h1>
            </>
        )
    )
}

export default HomePage
