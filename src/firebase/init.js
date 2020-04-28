import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyBe6RRGe8mAbCXsApOGyqnFHVWSBaqmrPE',
  authDomain: 'dyn-digital.firebaseapp.com',
  databaseURL: 'https://dyn-digital.firebaseio.com',
  projectId: 'dyn-digital',
  storageBucket: 'dyn-digital.appspot.com',
  messagingSenderId: '746324157668',
  appId: '1:746324157668:web:ab3da0266442721a5238f1'
}

firebase.initializeApp(config)
