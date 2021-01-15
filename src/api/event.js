import firebase from "firebase";

export const event = {
    getEvent : async ({uid}) => {
        const db = firebase.firestore();
        const profileDocRef = db.collection("events").doc(uid);
        const profileDoc = await profileDocRef.get();
        return profileDoc.data();
    },

    //TODO:  ID really should be separate from this.
    listEvents : async () => {
        const db = firebase.firestore();
        const collectionRef = db.collection("events");
        const queryResult = await collectionRef.get();
        const result = [];
        queryResult.forEach(doc => {
                result.push({
                    id: doc.id,
                    ...doc.data()
                }
            )
        });
        return result;
    },

    createEvent : async ({event}) => {
        const db = firebase.firestore();
        const collectionRef = db.collection("events");
        const result = await collectionRef.add(event);
        return result;
    },

    updateEvent : async(uid, {event}) => {
        const db = firebase.firestore();
        const docRef = db.collection("profiles").doc(uid);
        await docRef.set(event);
        const docRefAfter = await docRef.get();
        return docRefAfter.data();
    }
}
