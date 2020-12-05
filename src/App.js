import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from './containers/Home';
import NotFoundPage from './containers/NotFound';

function App() {
  return (
    <Router>
      <div>
        <MainHeader />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
