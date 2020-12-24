import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { DJList } from './components/DJList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DjDashBoard from './djdashboard/djdashboard';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/djdashboard">
          <DjDashBoard />
        </Route>
        <Route path="/">
          <DJList />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
