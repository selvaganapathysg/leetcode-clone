import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBudjQxo8-Ah2wem9lOq_1S3JmiYK8T2q8",
  authDomain: "leetcode-clone-44d32.firebaseapp.com",
  projectId: "leetcode-clone-44d32",
  storageBucket: "leetcode-clone-44d32.firebasestorage.app",
  messagingSenderId: "324365549877",
  appId: "1:324365549877:web:dc3b49c848c50e2f318c7c",
  measurementId: "G-0CH60NBGFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
