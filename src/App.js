import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Form setUsers={setUsers} />
          </Route>
          <Route exact path="/usercard">
            <UserCard list={users} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
