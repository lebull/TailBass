import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { profilesByOwner } from '../graphql/queries';
import { createProfile, updateProfile } from "../graphql/mutations";

import { Profile } from "../models";
import { DjInfo } from './DjInfo';
import { Box } from '@material-ui/core';

function DjDashBoard() {
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  const createNewProfile = async ({owner}) => {
    const newProfile = new Profile({
      "owner": owner,
      "djname": "Lorem ipsum dolor sit amet",
      "genre": "Lorem ipsum dolor sit amet"
    });
    return await API.graphql(graphqlOperation(createProfile, {input: newProfile}));
  }

  const onProfileSaved = async ({profile}) => {
    try {
      await API.graphql(graphqlOperation(updateProfile, { input: profile }));
      alert("Changes Saved");
    } catch (e) {
      alert(e.errors.map(error => error.message).join("\n"));
    }
  }

  useEffect(() => {
      const setUserInfo = async () => {
        const userInfo = await Auth.currentUserInfo();
        const profilesResult = await API.graphql(graphqlOperation(profilesByOwner, {owner: userInfo.username}));

        let profile = profilesResult.data.profilesByOwner.items[0];

        if(!profile){
          profile = createNewProfile({owner: userInfo.username})
        }

        setState({
          loading: false,
          error: null,
          owner: userInfo.username,
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

      <Box>
        <p>{state.owner}</p>
        { state.loading ? <p>Loading...</p> : ""}
        { state.profile ? <DjInfo profile={state.profile} onProfileChange={onProfileSaved}/> : ""}
      </Box>
    </>
  );
}

export default withAuthenticator(DjDashBoard);