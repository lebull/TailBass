import firebase from 'firebase';



export const profile = {
    getProfile : async (userId) => {
        const db = firebase.firestore();
        const profileDocRef = db.collection("profiles").doc(userId);
        const profileDoc = await profileDocRef.get();

        if (profileDoc.exists) {
            return profileDoc.data();
        } else {
            return await profileDocRef.set({
                djname: "",
                genre: "",
            });
        }
    },

    updateProfile : async (userId, {profile}) => {
        const db = firebase.firestore();
        const profileDocRef = db.collection("profiles").doc(userId);
        await profileDocRef.set(profile);
        const profileDoc = await profileDocRef.get();
        return profileDoc.data();
    }
}