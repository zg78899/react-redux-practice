import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-35_uaN6GS_hJnO1ThisEqK5fA4nTgOA",
  authDomain: "note-react-redux-26888.firebaseapp.com",
  projectId: "note-react-redux-26888",
  storageBucket: "note-react-redux-26888.appspot.com",
  messagingSenderId: "585142850793",
  appId: "1:585142850793:web:28a15e493dfd1747054c78",
  measurementId: "G-W6034ZDD5Z",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
