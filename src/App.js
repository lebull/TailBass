import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { DJList } from './components/DJList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DjDashBoard from './djdashboard/DjDashboard';
import { Events } from './events/Events';
import { Home } from './home/Home';
import { Navbar } from './layout/Navbar';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/djdashboard">
            <DjDashBoard />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/poster">
            <DJList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
