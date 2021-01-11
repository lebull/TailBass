import { withAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useEffect, useState, useContext } from 'react';
import { profilesByOwner } from '../graphql/queries';
import { createProfile, updateProfile } from "../graphql/mutations";

import { Profile } from "../models";
import { DjInfo } from './DjInfo';
import { Box, Paper, Typography } from '@material-ui/core';
import { UiContext } from '../contexts/UiContext';

function DjDashBoard() {
  const [state, setState] = useState({
    loading: true,
    error: null,
  });

  const { openSnackbar } = useContext(UiContext);
  
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
      setState({...state, loading: true});
      await API.graphql(graphqlOperation(updateProfile, { input: profile }));
      openSnackbar("Changes Saved");
    } catch (e) {
      alert(e.errors.map(error => error.message).join("\n"));
    } finally {
      setState({...state, loading: false});
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

  if(state.loading){
    return <p>Loading...</p> 
  }

  return (
    <Box p={3}>
      <Paper>
        <Box p={3}>
          <Typography variant="h5">{state.owner}</Typography>
          { state.profile ? <DjInfo profile={state.profile} onProfileChange={onProfileSaved}/> : ""}
        </Box>
      </Paper>  
    </Box>  
  );
}

export default withAuthenticator(DjDashBoard);