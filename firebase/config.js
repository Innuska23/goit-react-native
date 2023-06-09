import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB0e4J_roV-_XZEuu7kk88-qVBbIEeYJMk',
  authDomain: 'react-native-hw-6-12-06.firebaseapp.com',
  databaseURL: 'https://react-native-hw-6-12-06-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-hw-6-12-06',
  storageBucket: 'react-native-hw-6-12-06.appspot.com',
  messagingSenderId: '545745268067',
  appId: '1:545745268067:web:9cfaf8f30a03b74c4cf756',
  measurementId: 'G-ED0Z5JHVCJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const database = getDatabase(app);
