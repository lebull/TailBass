import firebase from "firebase";

const COLLECTION = "events";

export const event = {
    getEvent : async ({uid}) => {
        const db = firebase.firestore();
        const docRef = db.collection(COLLECTION).doc(uid);
        const doc = await docRef.get();
        return doc.data();
    },

    listEvents : async () => {
        const db = firebase.firestore();
        const collectionRef = db.collection(COLLECTION);
        const queryResult = await collectionRef.get();
        const result = [];
        queryResult.forEach(doc => {
                result.push({
                    id: doc.id,
                    doc: {
                        ...doc.data()
                    }
                }
            )
        });
        return result;
    },

    createEvent : async ({event}) => {
        const db = firebase.firestore();
        const collectionRef = db.collection(COLLECTION);
        const result = await collectionRef.add(event);
        return result;
    },

    updateEvent : async(uid, {event}) => {
        const db = firebase.firestore();
        const docRef = db.collection(COLLECTION).doc(uid);
        await docRef.set(event);
        const docRefAfter = await docRef.get();
        return docRefAfter.data();
    }
}
