import firebase from "firebase";

const auth = {
  // firebase helper methods go here...
  signUp: async (email, password) => {
    try {
      return await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    } catch (err) {
      return false;
    }
  },
  signIn: async (email, password) => {
    try {
      return await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
      return false;
    }
  },
  signOut: () => firebase.auth().signOut(),
  getUserRoles: async (userUid) => {
    const db = firebase.firestore();
    const doc = await db.doc(`userRoles/${userUid}`).get();
    const result = doc.data();
    if (!doc.exists) {
      return [];
    }
    return result.roles;
  },
};

export default auth;
