import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { DJList } from './components/DJList';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <DJList />
    </div>
  );
}

export default withAuthenticator(App);
