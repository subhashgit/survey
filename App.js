import 'react-native-gesture-handler';
import React from 'react';
import * as firebase from 'firebase';
import App from './src';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default function Main () {
  return <App />;
}