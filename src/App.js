import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import AddEvent from './Components/AddEvent/AddEvent';
import SelectForm from './Components/SelectForm/SelectForm';

export const OrganizationContext = createContext();

function App() {
  const [org, setOrg] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/organizations')
       .then(res => res.json())
       .then(data => setOrg(data))
    }, [])
   
   
   

  return (
    <OrganizationContext.Provider value={[org, setOrg]}>
    <Router>
      <Switch>
        <Route exact path="/addevent">
         <AddEvent/>
       </Route>
       <Route path="/register/:id">
         <SelectForm/>
       </Route>
       <Route path="/home">
         <Home/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
       <NotMatch/>
       </Route>
      </Switch>
    </Router>
    </OrganizationContext.Provider>
  );
}

export default App;
