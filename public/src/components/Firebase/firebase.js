import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBiWs1tRRGCofWPFcf1Ry9-_wcWPr0JAnQ",//process.env.REACT_APP_API_KEY,
  authDomain: "delivr-25212.firebaseapp.com",//process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://delivr-25212.firebaseio.com",//process.env.REACT_APP_DATABASE_URL,
  projectId: "delivr-25212",//process.env.REACT_APP_PROJECT_ID,
  storageBucket: "delivr-25212.appspot.com",//process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "G-TP7KSHC400",//process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');

}

export default Firebase;
