import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DjDashBoard from './djdashboard/DjDashboard';
import Events from './events/Events';
import { Home } from './home/Home';
import { Layout } from './layout/Layout';
import { UiProvider } from './contexts/UiContext';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from "./firebase.conf";
import firebase from "firebase/app";
import { SignUp } from './session/SignUp';
import { SignIn } from './session/SignIn';

function App() {
  return (
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
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
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/signin">
                  <SignIn />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </UiProvider>
      </FirebaseAuthProvider>
  );
}

export default App;
