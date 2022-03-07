import React, { useState } from 'react';
import './App.css';
import RepoScreen from "./components/repository-search/RepoScreen"
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import UserSearch from './components/user-search/UserSearch';
import RepoFinderNavbar from './components/RepoFinderNavbar';

export interface IUser {
  name: string;
}

function App() {

  const [user, setUser] = useState<String>("")

  const findUser = (user: any) => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          console.log("no user found")
        } else {
          setUser(data.login)
        }
      })
  }

  const checkNewUser = () => {
    setUser("")
  }

  const userToSearch = () => {
    const input = (document.getElementById("userSearch") as HTMLInputElement).value
    console.log(input)
    return input;
  }


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Repofinder</Navbar.Brand>
        </Container>
        <Nav className="me-auto buttonContainer">
          {user && <Button onClick={() => { checkNewUser() }}>check different user</Button>}
        </Nav>
      </Navbar>
      {
        !user ?
          (
            <div className='userSearchContainer'>
              <UserSearch findUser={() => findUser(userToSearch())} />
            </div>
          ) :
          <div>
            <h2>{user}'s Repositories </h2>
            <RepoScreen user={user} />
          </div>
      }
    </div>
  );
}

export default App;
