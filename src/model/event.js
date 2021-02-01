import firebase from "firebase";

const COLLECTION = "events";

const event = {
  getEvent: async ({ uid }) => {
    const db = firebase.firestore();
    const docRef = db.collection(COLLECTION).doc(uid);
    const doc = await docRef.get();
    return doc.data();
  },

  listEvents: async () => {
    const db = firebase.firestore();
    const collectionRef = db.collection(COLLECTION);
    const queryResult = await collectionRef.get();
    const result = [];
    queryResult.forEach((doc) => {
      result.push({
        id: doc.id,
        doc: {
          ...doc.data(),
        },
      });
    });
    return result;
  },

  createEvent: async ({ eventToCreate }) => {
    const db = firebase.firestore();
    const collectionRef = db.collection(COLLECTION);
    const result = await collectionRef.add(eventToCreate);
    return result;
  },

  updateEvent: async (uid, { updatedEvent }) => {
    const db = firebase.firestore();
    const docRef = db.collection(COLLECTION).doc(uid);
    await docRef.set(updatedEvent);
    const docRefAfter = await docRef.get();
    return docRefAfter.data();
  },
};

export default event;
