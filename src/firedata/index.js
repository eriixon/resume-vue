import firebase from 'firebase/app';
import 'firebase/database';
import config from '../../config/firebase.json';

export const firedata = firebase.initializeApp(config).database();

export default firedata;
