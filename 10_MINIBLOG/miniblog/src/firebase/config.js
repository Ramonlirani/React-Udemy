import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAundu8n1xgBsrEYzwPE06fQU5omrryCLs",
  authDomain: "mini-blog-90ff6.firebaseapp.com",
  projectId: "mini-blog-90ff6",
  storageBucket: "mini-blog-90ff6.appspot.com",
  messagingSenderId: "499783290287",
  appId: "1:499783290287:web:c0390f85638caf3aa7335a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };