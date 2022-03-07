import React, { useState } from 'react';
import './App.css';
import RepoScreen from "./components/repository-search/RepoScreen"
import Button from 'react-bootstrap/Button';

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

  const userToSearch = () => {
    const input = (document.getElementById("userSearch") as HTMLInputElement).value
    console.log(input)
    return input;
  }


  return (
    <div className="App">
      {
        !user ?
          (
            <div>
              <input id="userSearch" type="search" placeholder='Search for user'/>
              <Button onClick={() => findUser(userToSearch())}>search</Button>
            </div>
          ) :
          <div>
            <h2>You searching through the repositories of {user} </h2>
            <RepoScreen user={user} />
          </div>

      }

    </div>
  );
}

export default App;
