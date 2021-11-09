import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import HomePage from "./HomePage";
import Profile from "./Profile";
import { Navbar, Container } from "react-bootstrap";


function Home(props) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="50"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Container>
    </Container>
          <LoginButton />
          <LogoutButton />
        </Container>
      </Navbar>
     <HomePage/>
        <Profile />
      
    </>
  );
}

export default Home;
