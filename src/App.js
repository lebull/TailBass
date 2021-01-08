import './App.scss';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { DJList } from './components/DJList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DjDashBoard from './djdashboard/DjDashboard';
import Events from './events/Events';
import { Home } from './home/Home';
import { Layout } from './layout/Layout';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
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
        </Layout>
      </Router>
    </div>
  );
}

export default App;
