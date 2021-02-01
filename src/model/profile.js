import firebase from "firebase";

const profile = {
  getProfile: async (userId) => {
    const db = firebase.firestore();
    const profileDocRef = db.collection("profiles").doc(userId);
    const profileDoc = await profileDocRef.get();

    if (profileDoc.exists) {
      return profileDoc.data();
    }
    return profileDocRef.set({
      djname: "",
      genre: "",
    });
  },

  updateProfile: async (userId, { updatedProfile }) => {
    const db = firebase.firestore();
    const profileDocRef = db.collection("profiles").doc(userId);
    await profileDocRef.set(updatedProfile);
    const profileDoc = await profileDocRef.get();
    return profileDoc.data();
  },
};

export default profile;
