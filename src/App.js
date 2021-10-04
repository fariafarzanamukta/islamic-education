import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Islam from "./components/Islam/Islam";
import Details from "./components/Details/Details";
import OurService from "./OurService/OurService";
import NotFound from "./components/NotFound/NotFound";


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
          <Route path="/homes/:detailsId">
            <Details></Details>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/ourservices">
            <OurService></OurService>
          </Route>
          <Route exact path="/islam">
            <Islam></Islam>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
