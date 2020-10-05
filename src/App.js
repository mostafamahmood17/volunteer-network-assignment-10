import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import AddEvent from './Components/AddEvent/AddEvent';
import SelectForm from './Components/SelectForm/SelectForm';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import UserContibutions from './Components/UserContibutions/UserContibutions';
import Admin from './Components/Admin/Admin';
import AdminCreate from './Components/AdminCreate/AdminCreate';


export const OrganizationContext = createContext();

function App() {
  const [org, setOrg] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});




  return (
    <OrganizationContext.Provider value={[org, setOrg, loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/addevent">
            <AddEvent />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/register/:id">
            <SelectForm />
          </PrivateRoute>
          <Route path="/contributions">
            <UserContibutions />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orgcreate">
            <AdminCreate />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </OrganizationContext.Provider>
  );
}

export default App;
