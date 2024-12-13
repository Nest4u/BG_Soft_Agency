import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyDKfwDjIYFutPnMlQQmBADtIEkCFANcZ5c",
    authDomain: "aadex-760ec.firebaseapp.com",
    projectId: "aadex-760ec",
    storageBucket: "aadex-760ec.appspot.com",
    messagingSenderId: "662969564761",
    appId: "1:662969564761:web:7ba1c53dc05d50d68f7b48",
    measurementId: "G-LKYKP1QHLF"
  };

  const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };