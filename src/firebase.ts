import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB69N_CZY4nKWGDrGhzuLDASOW-zBT9fm4',
  authDomain: 'mantoras-519fa.firebaseapp.com',
  databaseURL: 'https://mantoras-519fa.firebaseio.com',
  projectId: 'mantoras-519fa',
  storageBucket: 'mantoras-519fa.appspot.com',
  messagingSenderId: '668843622358',
  appId: '1:668843622358:web:93eb2ab3114c8871b92e77',
  measurementId: 'G-B65BC2PWTZ',
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase
