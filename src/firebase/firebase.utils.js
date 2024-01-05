
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider ,signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
    

const firebaseConfig = {
    apiKey: "AIzaSyChzNXnBuDMw-jrzNlgeR-ZMAVpCD_TFr8",
    authDomain: "crwn-db-e2e1d.firebaseapp.com",
    projectId: "crwn-db-e2e1d",
    storageBucket: "crwn-db-e2e1d.appspot.com",
    messagingSenderId: "194815625419",
    appId: "1:194815625419:web:a846b64f7159673210334e",
    measurementId: "G-7G7PMEEYCJ"
  };



  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const firestore = getFirestore(app);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const signInWithGoogle = () => signInWithPopup(auth, provider);


  export { auth, firestore, signInWithGoogle };
  export default app;

