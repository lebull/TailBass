// import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

function DjDashBoard() {

  const [state, setState] = useState({});

  useEffect(() => {
      const setUserInfo = async () => {
        const userInfo = await Auth.currentUserInfo();
        setState({
          username: userInfo.username,
          userinfo: userInfo.attributes,
        })
      };

      setUserInfo();
    },
    []
  );

  return (
    <>
      <AmplifySignOut />
      <p>I am {state.username}</p>
    </>
  );
}

export default withAuthenticator(DjDashBoard);