import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { profilesByUser } from '../graphql/queries';

function DjDashBoard() {

  const [state, setState] = useState({});

//   const createFreshProfile =  DataStore.save(
//     new Profile({
// 		"username": "Lorem ipsum dolor sit amet",
// 		"djname": "Lorem ipsum dolor sit amet",
// 		"genre": "Lorem ipsum dolor sit amet"
// 	})
// );

  useEffect(() => {
      const setUserInfo = async () => {
        const userInfo = await Auth.currentUserInfo();
        const profilesResult = await API.graphql(graphqlOperation(profilesByUser, {username: userInfo.username}));

        let profile = profilesResult.data.profilesByUser.items[0];
        
        setState({
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