import React, { useState } from 'react';
import './App.css';
import RepoScreen from "./components/repository-search/RepoScreen"
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import UserSearch from './components/user-search/UserSearch';

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
        } else {
          setUser(data.login)
        }
      })
      .catch(err => console.log(err))
  }

  const checkNewUser = () => {
    setUser("")
  }

  const userToSearch = () => {
    // const input = 
    // return input;
    return (document.getElementById("userSearch") as HTMLInputElement).value
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
            <RepoScreen user={user} />
          </div>
      }
    </div>
  );
}

export default App;
