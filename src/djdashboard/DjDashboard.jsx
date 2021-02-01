import { useEffect, useState, useContext } from 'react';
import { DjInfo } from './DjInfo';
import { Box, Paper, Typography } from '@material-ui/core';
import { UiContext } from '../contexts/UiContext';
import { profileModel } from "../model";
import { FirebaseAuthConsumer } from '@react-firebase/auth';

const DjDashBoard = () => <FirebaseAuthConsumer>
  {({user}) => <DjDashBoardWithUser user={user} />}
</FirebaseAuthConsumer>


function DjDashBoardWithUser({user}) {
  // const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState();

  const { openSnackbar } = useContext(UiContext);

  const onProfileSaved = async ({profile}) => {
    try {
      setLoading(true);
      const result = await profileModel.updateProfile(user.uid, {profile});
      setProfile(result);
      openSnackbar("Changes Saved");
    } catch (e) {
      alert(e.errors.map(error => error.message).join("\n"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    if(!user){
      return;
    }

      const setUserInfo = async () => {
        const profile = await profileModel.getProfile(user.uid);
        setProfile(profile);
        setLoading(false);
      };
      setUserInfo();
    },
    [user]
  );



  return (
    <Box p={3}>
      <Paper>
        <Box p={3}>
          <Typography variant="h5">Dj Info</Typography>
          { loading ? 
            <p>Loading...</p> 
            : 
            <DjInfo profile={profile} onProfileChange={onProfileSaved}/> 
          }
        </Box>
      </Paper>  
    </Box>  
  );
}

export default DjDashBoard;