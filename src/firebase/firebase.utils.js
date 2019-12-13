import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAFw-2dZlE92FXNupE8EgMpleKkqRmfAyQ",
  authDomain: "crown-clothing-db-9221a.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-9221a.firebaseio.com",
  projectId: "crown-clothing-db-9221a",
  storageBucket: "crown-clothing-db-9221a.appspot.com",
  messagingSenderId: "758912518700",
  appId: "1:758912518700:web:c105baec2c789a39c91f89",
  measurementId: "G-NTJ4Z77VS2"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
