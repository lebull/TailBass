import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { profilesByUser } from '../graphql/queries';
import { createProfile } from "../graphql/mutations";


import { Profile } from "../models";

function DjDashBoard() {

  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
      const setUserInfo = async () => {
        const userInfo = await Auth.currentUserInfo();
        const profilesResult = await API.graphql(graphqlOperation(profilesByUser, {username: userInfo.username}));

        let profile = profilesResult.data.profilesByUser.items[0];

        if(!profile){
          const newProfile = new Profile({
            "username": userInfo.username,
            "djname": "Lorem ipsum dolor sit amet",
            "genre": "Lorem ipsum dolor sit amet"
          });
          profile = await API.graphql(graphqlOperation(createProfile, {input: newProfile}));
        }

        setState({
          loading: false,
          error: null,
          username: userInfo.username,
          userinfo: userInfo.attributes,
          profile: profile,
        });
      };
      setUserInfo();
    },
    []
  );

  return (
    <>
      <AmplifySignOut />
      <p>I am {state.username}</p>
      <p>DJName: {state.profile?.djname}</p>
      <p>Genre: {state.profile?.genre}</p>
    </>
  );
}

export default withAuthenticator(DjDashBoard);