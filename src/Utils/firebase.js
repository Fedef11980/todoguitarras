// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1AwFU-ZuzzBVJtMvEnEAi2cypu-4qXn8",
  authDomain: "todo-guitarras.firebaseapp.com",
  projectId: "todo-guitarras",
  storageBucket: "todo-guitarras.appspot.com",
  messagingSenderId: "483110518599",
  appId: "1:483110518599:web:44b809e57d6046e7b71662",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


