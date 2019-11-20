import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'

import './App.css'
import 'bulma/css/bulma.css'

import Navbar from './components/NavBar'
import UsersList from './components/UsersList'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

library.add(fab, faTrash, faEdit)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <Route path="/" exact component={UsersList} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/edit-user/:id" component={EditUser} />
      </div>
    </Router>
  );
}

export default App;
