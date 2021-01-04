import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { profilesByUser } from '../graphql/queries';
import { createProfile, updateProfile } from "../graphql/mutations";

import { Profile } from "../models";
import { DjInfo } from './DjInfo';

function DjDashBoard() {
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  //TODO:  Does this need to be async?
  const createNewProfile = async ({username}) => {
    const newProfile = new Profile({
      "username": username,
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
        const profilesResult = await API.graphql(graphqlOperation(profilesByUser, {username: userInfo.username}));

        let profile = profilesResult.data.profilesByUser.items[0];

        if(!profile){
          profile = createNewProfile({username: userInfo.username})
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
      <p>{state.username}</p>
      { state.loading ? <p>Loading...</p> : ""}
      { state.profile ? <DjInfo profile={state.profile} onProfileChange={onProfileSaved}/> : ""}
    </>
  );
}

export default withAuthenticator(DjDashBoard);