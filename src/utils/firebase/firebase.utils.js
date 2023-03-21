import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_ZtRkp-Hsl5ND2i-8ohh3xydX0FN7qGM",
    authDomain: "unique-styles-f364b.firebaseapp.com",
    projectId: "unique-styles-f364b",
    storageBucket: "unique-styles-f364b.appspot.com",
    messagingSenderId: "316153669477",
    appId: "1:316153669477:web:23e317ed0bf883b5c4638c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);
      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists());

      if(!userSnapshot.exists()) {  
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
              })
          } catch(error) {
              console.log("Error in creating user", error.message);
          }
      }
      return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password)
        return;

      return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)
      return;

    return await signInWithEmailAndPassword(auth, email, password);
}