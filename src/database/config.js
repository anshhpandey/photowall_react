// import * as firebase from 'firebase'
// // import { getAnalytics } from "firebase/analytics";


// firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);


// const database = firebase.database
// export {database} 




// import firebase from 'firebase/app';
// import 'firebase/database';
import { initializeApp } from "firebase/app";
// import 'firebase/database';
import { getDatabase } from "firebase/database";
// import firebase from 'firebase/compat/app'; 
// import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDRo77gv0J3MuruufB2AhlRvsheK_DICBQ",
    authDomain: "photowall-cd705.firebaseapp.com",
    projectId: "photowall-cd705",
    storageBucket: "photowall-cd705.appspot.com",
    messagingSenderId: "747509521864",
    appId: "1:747509521864:web:03593ae6700c90ab01f4fd",
    measurementId: "G-6NBZLVY593"
  };


// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };