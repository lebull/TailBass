import firebase from 'firebase'

 export const auth = {
  // firebase helper methods go here... 
  signUp: async (email, password) => {
    debugger;
    try {
      return await firebase.auth().createUserWithEmailAndPassword(email,password) 
    } catch (err) {
      console.error(err);
      debugger;
    }

  },
  signIn: async (email, password) => {
    try{
      return await firebase.auth().signInWithEmailAndPassword(email,password)
    }catch (err) {
      console.error(err);
      debugger;
    }
  },
  signOut: async () => {
    return await firebase.auth().signOut();
  },
}