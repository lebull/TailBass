import './App.scss';

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
import { AuthProvider } from './contexts/AuthContext';
import { UiProvider } from './contexts/UiContext';

function App() {
  return (
      <AuthProvider>
        <UiProvider>
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
        </UiProvider>
      </AuthProvider>
  );
}

export default App;
