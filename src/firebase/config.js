import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDjXscxsYnQYGk0Oqo2KTxxgfyh8wHlIMk',
    authDomain: 'healthify-a014b.firebaseapp.com',
    databaseURL: 'https://healthify-a014b-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: 'healthify-a014b',
    storageBucket: 'gs://healthify-a014b.appspot.com',
    messagingSenderId: '1020312333073',
    appId: '1:1020312333073:android:c9c89166b739e775e77ab0',
    };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

export { firebase } ;
