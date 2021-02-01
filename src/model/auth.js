import firebase from 'firebase';

 export const auth = {
  // firebase helper methods go here... 
  signUp: async (email, password) => {
    try {
      return await firebase.auth().createUserWithEmailAndPassword(email,password) 
    } catch (err) {
      console.error(err);
    }
  },
  signIn: async (email, password) => {
    try{
      return await firebase.auth().signInWithEmailAndPassword(email,password)
    }catch (err) {
      console.error(err);
    }
  },
  signOut: async () => {
    return await firebase.auth().signOut();
  },
}