import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar.component"
import NotFoundPage from './components/NotFoundPage';
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Switch>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />

        <Route component={NotFoundPage} exact/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
