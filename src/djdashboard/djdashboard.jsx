// import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { DJList } from '../components/DJList';

function DjDashBoard() {
  return (
    <div className="App">
      <AmplifySignOut />
      <DJList />
    </div>
  );
}

export default withAuthenticator(DjDashBoard);