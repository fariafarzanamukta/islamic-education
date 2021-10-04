import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Islam from "./components/Islam/Islam";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/islam">
            <Islam></Islam>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
