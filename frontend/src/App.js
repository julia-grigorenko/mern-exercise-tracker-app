import logo from './logo.svg';
import './App.css';

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
